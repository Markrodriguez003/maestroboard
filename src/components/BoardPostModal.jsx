
// REACT
import { useState, useEffect, useContext } from "react";

// COMPONENTS
import axios from "axios";
import { Button, Modal, Container, Form, Row, Col, Stack } from "react-bootstrap";
import { ToastContext } from "./ui/NotificationToast";

// LIBRARIES
import imageUploader from "../../server/scripts/imageUploader";
import { useForm } from "react-hook-form";

// ASSETS
import { Reply, BackspaceReverse, PinAngleFill, XCircleFill } from "react-bootstrap-icons"; // Importing Bootstrap Icon Components

// DATA
// import article_types from "../data/articleTypes.json";

// DESIGN CSS
import { SITE_COLORS } from "./css/site";

/*----------------------------------------------------------------------------
|   ⚙️ Use: Modal form for creating a new corkboard post to push to the backend  
|   
|   🔧 Todo: More form options | Form checking | Post link creation
|
|   📦 Returns: JSX component
*----------------------------------------------------------------------------*/

function BoardPostModal() {

  // FORM VALIDATION STATE 
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  // HOLDS TOAST TOGGLE AND VALUE
  // CONTEXT SETTERS & GETTERS FOR NOTIFICATION TOAST 
  const { toast, setToast } = useContext(ToastContext);

  // SETS NEW ARTICLE OBJECT
  let [newPost, setNewPost] = useState({
    type: "",
    instrument: "Any", // Default
    title: "",
    email: "",
    phoneNumber: "",
    images: "",
    bBody: "",
    price: "",
    trade: false, // Default
    link: "",
    public_images_id: [],
    image_urls: [],
    secure_images_urls: [],
    caption: "",
  });

  // HANDLES SHOWING OF MODAL
  const [show, setShow] = useState(false);

  // HOLDS TEMPORARY IMAGE DATA ARRAY
  const [tempImageArr, setTempImageArr] = useState([]);

  // HOLDS LOADING STATE OF FORM SUBMITTION
  const [submitLoading, setSubmitLoading] = useState(false);

  //  SIDE EFFECT THAT KICKS WHEN USER SUBMITS FORM.
  //  TAKES IMAGE FILES -> UPLOADS IT TO CLOUDINARY -> SAVES IMAGE URLS/ID TO NEW ARTICLE STATE
  //  PUSHES NEWLY CREATE ARTICLE TO DB
  useEffect(() => {

    // PUSHES ARTICLE TO DB
    async function CREATE_NEW_POST(newPost) {
      try {
        const response = await axios.post('http://localhost:3005/api/insertpost',
          newPost);
        // SETS TOAST OF SUBMITTED ARTICLE!
        setToast((prevToast => ({
          ...prevToast,
          show: true,
          header: "Post has been created!",
          message: "Refresh page to see Post populated on website!",
          error: false
        })))
      } catch (error) {
        console.log(`Here is the error inserting new post::: ${error}`);
        setToast((prevToast => ({
          ...prevToast,
          show: true,
          header: "Article could not be created!",
          message: "Sorry about that! We ran into an issue on our end. Please try again later!",
          error: true
        })))
      }
    }
    // HANDLES IMAGE UPLOAD TO CLOUDINARY & SAVING OF URLs/IDs
    async function postFormSubmit() {

      // SETS LOADING SPINNER FOR BUTTON
      setSubmitLoading(true);

      // UPLOADS IMAGES AFTER IMAGE CHECK AND PRODUCES PUBLIC AND SECURE LINK URLS/IDS
      // MAKES API UPLOAD POST CALL TO CLOUDINARY
      let publicArry = [];
      let urlArry = [];
      let secureArry = [];
      try {
        for (let i = 0; i < tempImageArr.length; i++) {
          await imageUploader(tempImageArr[i])
            .then((data) => {
              console.log(`${i} - Public ID: ${data.publicID}`);
              console.log(`${i} - Secure URL: ${data.secureURL}`);
              console.log(`${i} - URL: ${data.url}`);
              publicArry = [...publicArry, data.publicID];
              urlArry = [...urlArry, data.url];
              secureArry = [...secureArry, data.secureURL];

            }).catch((error) => {
              console.log(`Error updating state with images::${error}`)
              setToast((prevToast => ({
                ...prevToast,
                show: true,
                header: "Images could not be inserted!",
                message: "Sorry about that! We ran into an issue on our end. Please try again later!",
                error: true
              })))
              return;
            })
        }

        // UPDATES IMAGE DATA URLS/IDS TO SERTARTICLE
        let finalizedPost = {
          ...newPost, public_images_id: publicArry,
          image_urls: urlArry,
          secure_images_urls: secureArry
        }


        console.log(`Finalized post::: ${JSON.stringify(finalizedPost)}`)

        // PASSES ARTICLE WITH RESPECTATIVE POPULATED IMAGES TO FUNCTION INSERT DB 
        await CREATE_NEW_POST(finalizedPost);

        // CLOSES OUT MODAL
        setShow(false);

        // TURNS OFF SUBMISSION SPINNER 
        setSubmitLoading(false);

      } catch (error) {
        console.log(`Error receiving image URLs/IDs : ${error}`);
        setToast((prevToast => ({
          ...prevToast,
          show: true,
          header: "Images URLs could not be received!",
          message: "Sorry about that! We ran into an issue on our end. Please try again later!",
          error: true
        })))
      }
    }

    // LISTES FOR FORM SUBMISSION TO TRIGGER LOADING OF IMAGES TO ARTICLE STATE
    if (submitLoading === true) {
      // SUBMIT ARTICLE DATA TO CHECKS THEN BACKEND
      postFormSubmit();
    }
  }, [submitLoading]);


  // GRABS ARTICLE TYPES TO POPULATE SELECT OPTION IN ARTICLE CREATION SELECTION 
  // const article_categories = article_types[0].article_types;

  // FORM SUBMIT HANDLER
  const onSubmit = (data) => {
    // TESTING DATA COMING FROM FORM
    // console.log(`Submitted form data: ${JSON.stringify(data)}`)

    // LIMIT THE # OF IMAGES THAT CAN BE UPLOADED
    const MAXFILES = 5;

    // IF MAX IMAGE FILE UPLOAD IS REACHED EMPTY VALUE & NOT SEND FORM
    if (data.images.length > MAXFILES) {

      // RESETS UPLOADED IMAGES IN ONPUT BUFFER
      setValue('files', '');

      // DISPLAY ERROR MSG
      setToast((prevToast => ({
        ...prevToast,
        show: true,
        header: "Max image cound reached!",
        message: `You attempted to upload more than 5 images. The max images allowed is ${MAXFILES}`,
        error: true
      })))
      return;
    }

    //*  IF ARTICLE IS COMPLETED CORRECTLY
    // IF MAX IMAGE FILES LIMIT NOT REACHS SETS FILES INTO A STATE TO BE USE ELSEWHERE
    setTempImageArr(data.images);

    // UPDATE ARTICLE STATE
    setNewPost((prev) => (
      {
        ...prev,
        ...data
      }
    ))


    // SETS SUBMIT LOADER SPINNER WHICH IS TRIGGERS SIDE EFFECT OF  
    // GRABBING URL IMAGES AND UPLOADING ARTICLE TO DB
    setSubmitLoading(true);
  };

  return (
    <>

      <Button size="md" className="text-light" onClick={() => setShow(true)}>
        Create a Post!
      </Button>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Container style={{ backgroundColor: SITE_COLORS.secondary, color: "white" }} className="" fluid>
          <span
            onClick={() => setShow(false)}
            style={{ display: "inline-block", right: "15px", top: "4px", fontSize: "30px", position: "absolute", cursor: "pointer" }}>
            <XCircleFill />
          </span>
          <Form className="p-3 m-0 " onSubmit={handleSubmit(onSubmit)}>
            <Stack>
              <h1 className="mt-0 text-center"><PinAngleFill className="mb-3" /> {" "} Create a Post</h1>
              <small className="mx-auto" style={{ display: "block" }}> {" "} Fill out all form fields!</small>
            </Stack>


            {/* POST FORM */}
            <Row>
              <Col>
                <Form.Group controlId="">
                  <Form.Label className="mt-1">Post Type:</Form.Label>
                  <br />
                  <select
                    className="form-select"
                    aria-label="Default select post category"
                    name="type"
                    {...register("type", { required: true })}
                  >
                    {/* //! MOVE THIS TO JSON */}
                    <option>Selling </option>
                    <option>Buying </option>
                  </select>
                  {errors.type && <Form.Text className="text-danger" >This field is required</Form.Text>}
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="">
                  <Form.Label className="mt-1">Post Sub-Type:</Form.Label>
                  <br />
                  <select
                    className="form-select"
                    aria-label="Default select post category"
                    name="instrument"
                    {...register("instrument", { required: true })}
                  >
                    {/* //! MOVE THIS TO JSON */}
                    <option>Any</option>
                    <option>Instrument - Guitar</option>
                    <option>Instrument - Bass</option>
                    <option>Instrument - Drums</option>
                    <option>Instrument - Percussion</option>
                    <option>Instrument - Synthesizer</option>
                    <option>Instrument - Brass</option>
                    <option>Instrument - Woodwinds</option>
                    <option>Instrument - Microphones</option>
                    <option>Instrument - Studio Equipment</option>
                    <option>Instrument - DJ Equipment</option>
                    <option>Band Personnel - Band Member</option>
                    <option>Service - Advertisement</option>
                  </select>
                  {errors.instrument && <Form.Text className="text-danger" >This field is required</Form.Text>}
                </Form.Group>
              </Col>
            </Row>

            <Form.Group>
              <Form.Label className="mt-1">Post Title:</Form.Label>
              <Form.Control
                type="text"
                name="title"
                placeholder="Enter Article Title"
                {...register("title", { required: true })}

              />
              {errors.title && <Form.Text className="text-danger" >This field is required</Form.Text>}
            </Form.Group>


            <Row>
              <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                <Form.Group controlId="">
                  <Form.Label className="mt-1">Contact Phone Number:</Form.Label>
                  <Form.Control
                    placeholder="..."
                    name="number"
                    {...register("number", { required: true })}
                  />
                  {errors.number && <Form.Text className="text-danger" >This field is required</Form.Text>}

                </Form.Group>
              </Col>
              <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                <Form.Group controlId="">
                  <Form.Label className="mt-1">Zipcode:</Form.Label>
                  <Form.Control
                    placeholder="..."
                    name="zipcode"
                    {...register("zipcode", { required: true })}
                  />
                  {errors.zipcode && <Form.Text className="text-danger" >This field is required</Form.Text>}
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                <Form.Group controlId="">
                  <Form.Label className="mt-1">Username:</Form.Label>
                  <Form.Control
                    placeholder="..."
                    name="username"
                    {...register("username", { required: true })}
                  />
                  {errors.username && <Form.Text className="text-danger" >This field is required</Form.Text>}

                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formGrid.images">
                  <Form.Group controlId="formFile">
                    <Form.Label className="mt-1">Upload Article Images</Form.Label>
                    <Form.Control type="file" multiple accept="image/*"
                      // onChange={(event) => handleFileChange(event)}
                      {...register("images", { required: true })}
                    />
                    {errors.images && <Form.Text className="text-danger" >Please insert at least one post image!</Form.Text>}
                  </Form.Group>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                <Form.Group controlId="">
                  <Form.Label className="mt-1">Price:</Form.Label>
                  <Form.Control
                    placeholder="..."
                    name="price"
                    {...register("price", { required: true })}
                  />
                  {errors.price && <Form.Text className="text-danger" >This field is required</Form.Text>}

                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formGrid.checkbox  ">
                  <br />
                  <br />
                  <Form.Check
                    type="switch"
                    id="custom-trade-switch"
                    label="Interested in a Trade?"
                    name="trade"
                    {...register("trade")}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Form.Group controlId="formGrid.body">
                <Form.Label className="mt-1">Post Body</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="4"
                  name="pBody"
                  {...register("pBody", { required: true })}
                />
                {errors.body && <Form.Text className="text-danger" >Please fill out this field!</Form.Text>}
              </Form.Group>
            </Row>
            <Row>
              <Form.Group controlId="">
                <Form.Label className="mt-1">Article Link:</Form.Label>
                <Form.Control
                  placeholder="..."
                  name="link"
                  {...register("link")}
                />
              </Form.Group>
            </Row>
            <br />

            {/* BUTTON GROUP */}
            <Stack direction="horizontal" className="justify-content-center gap-5 mb-4 text-lg-center mx-auto" >
              <Button
                variant="danger"
                className="text-light p-2 m-0"
                onClick={() => setShow(false)}
              >
                {" "}
                <BackspaceReverse className="mb-1" /> Cancel Post{" "}
              </Button>
              <Button
                className="text-light p-2 m-0"
                type="submit"
              >
                {submitLoading ?
                  <>
                    <span className="spinner-border spinner-border-sm " role="status" aria-hidden="true"></span>
                    {" "} Submitting...
                  </>
                  : <span> <Reply className="mb-1" /> Create Post </span>
                }
              </Button>
            </Stack>
          </Form>

        </Container>
      </Modal >
    </>
  );
}

export default BoardPostModal;
