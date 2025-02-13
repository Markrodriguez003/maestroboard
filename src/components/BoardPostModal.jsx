
// REACT
import { useState, useEffect, useContext } from "react";

// COMPONENTS
import axios from "axios";
import { Button, Modal, Container, Form, Row, Col, Stack, Toast } from "react-bootstrap";

// CONTEXT
import { ToastContext } from "./context/NotificationToast";
import { NotificationToast } from "./context/NotificationToast";

// LIBRARIES
import imageUploader from "../../server/scripts/imageUploader";
import { useForm } from "react-hook-form";

// ASSETS
import { Reply, BackspaceReverse, PinAngleFill, XCircleFill } from "react-bootstrap-icons";

// DATA
import post_types from "../data/postTypes.json";

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
  const { register, handleSubmit, reset, setValue, getValues, formState: { errors } } = useForm();

  // HOLDS TOAST TOGGLE AND VALUE
  const ToastNotificationContext = useContext(ToastContext);

  // POST FORM OPTIONS
  const FORM_OPTIONS = post_types[0];

  // console.log(`Post types:: ${JSON.stringify(postTypes)}`);

  // SETS NEW ARTICLE OBJECT
  let [newPost, setNewPost] = useState({
    type: "",
    subType: "",
    title: "",
    email: "",
    phoneNumber: "",
    images: "",
    bBody: "",
    price: "",
    trade: false,
    phone: "",
    firm_price: false,
    public_images_id: [],
    image_urls: [],
    secure_images_urls: [],
    caption: "",
  });

  // GRABBING SESSION MEMORY TO CHECK TO SEE IF USER IS SIGNED IN
  // VIA TOKEN DATA
  function getSessionToken() {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);

    return userToken;
  };

  const token = getSessionToken();
  const config = {
    headers: {
      'Authorization': `Bearer ${token}`,
      "Data": "Custom-Data"
    }
  }

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
        const response = await axios.post('http://localhost:3005/api/posts/insert',
          newPost, config);
        // SETS TOAST OF SUBMITTED ARTICLE!
        ToastNotificationContext.setToast((prevToast => ({
          ...prevToast,
          show: true,
          header: "Post has been created!",
          message: "Refresh page to see Post populated on website!",
          error: "successful"
        })))
      } catch (error) {
        console.log(`Here is the error inserting new post::: ${error}`);
        ToastNotificationContext.setToast((prevToast => ({
          ...prevToast,
          show: true,
          header: "Article could not be created!",
          message: "Sorry about that! We ran into an issue on our end. Please try again later!",
          error: "failure"
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
              publicArry = [...publicArry, data.publicID];
              urlArry = [...urlArry, data.url];
              secureArry = [...secureArry, data.secureURL];

            }).catch((error) => {
              console.log(`Error updating state with images::${error}`)
              ToastNotificationContext.setToast((prevToast => ({
                ...prevToast,
                show: true,
                header: "Images could not be inserted!",
                message: "Sorry about that! We ran into an issue on our end. Please try again later!",
                error: "failure"
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


        // console.log(`Finalized post::: ${JSON.stringify(finalizedPost)}`)

        // PASSES ARTICLE WITH RESPECTATIVE POPULATED IMAGES TO FUNCTION INSERT DB 
        await CREATE_NEW_POST(finalizedPost);

        // CLOSES OUT MODAL
        setShow(false);

        // TURNS OFF SUBMISSION SPINNER 
        setSubmitLoading(false);

        // RESETS FORM
        reset();

      } catch (error) {
        console.log(`Error receiving image URLs/IDs : ${error}`);
        ToastNotificationContext.setToast((prevToast => ({
          ...prevToast,
          show: true,
          header: "Images URLs could not be received!",
          message: "Sorry about that! We ran into an issue on our end. Please try again later!",
          error: "failure"
        })))
      }
    }

    // LISTES FOR FORM SUBMISSION TO TRIGGER LOADING OF IMAGES TO ARTICLE STATE
    if (submitLoading === true) {
      // SUBMIT POST DATA TO CHECKS THEN BACKEND
      postFormSubmit();
    }
  }, [submitLoading]);

  // FORM SUBMIT HANDLER
  const onSubmit = (data) => {

    // LIMIT THE # OF IMAGES THAT CAN BE UPLOADED
    const MAXFILES = 5;

    // IF MAX IMAGE FILE UPLOAD IS REACHED EMPTY VALUE & NOT SEND FORM
    if (data.images.length > MAXFILES) {

      // RESETS UPLOADED IMAGES IN ONPUT BUFFER
      setValue('files', '');

      // DISPLAY ERROR MSG
      ToastNotificationContext.setToast((prevToast => ({
        ...prevToast,
        show: true,
        header: "Max image cound reached!",
        message: `You attempted to upload more than 5 images. The max images allowed is ${MAXFILES}`,
        error: "failure"
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

  // CHECKS TO SEE WHAT POST TYPE USER IS USING FOR POST FORM
  const [postSubType, setPostSubType] = useState("");

  useEffect(() => {
    console.log(`TYPE::: ${postSubType}`)
  }, [postSubType])

  // MAX POST BODY CHARACTERS
  const MAX_TOTAL_POST_BODY_CHARACTERS = 400;

  // TOTAL POST BODY CHARACTERS FOR POST BODY CHARACTER MIN/MAX
  const [totalCharacters, setTotalCharacters] = useState(0);

  return (
    <>
      <NotificationToast>
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
                      onChange={(e) => setPostSubType(e.target.value)}
                    >

                      {
                        FORM_OPTIONS.post_types.map(type => <option key={`post-type-dropdown-${type}`}>{type}</option>)
                      }

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
                      name="subType"
                      {...register("subType", { required: true })}
                    >

                      {
                        // console.log(JSON.stringify(FORM_OPTIONS.post_sub_types_instruments))
                        postSubType === "Buying" || postSubType === "Selling"
                          ? FORM_OPTIONS.post_sub_types_instruments.map((option, index) => (<option key={`${option}-${index}`}>{option}</option>))
                          : postSubType === "Community" ? FORM_OPTIONS.post_sub_types_community.map((option, index) => (<option key={`${option}-${index}`}>{option}</option>))
                            : postSubType === "Advertisement" ? FORM_OPTIONS.post_sub_types_advertisements.map((option, index) => (<option key={`${option}-${index}`}>{option}</option>))
                              : <option>Nothing here</option>
                      }
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
                      name="Sonor S-Class Maple Drums"
                      {...register("phone", { required: true, minLength: 10, maxLength: 10, pattern: /^\d+$/ })}
                    />
                    {errors.phone && <Form.Text className="text-danger" >This field is required. 10 digits only please.</Form.Text>}

                  </Form.Group>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                  <Form.Group controlId="">
                    <Form.Label className="mt-1">Zipcode:</Form.Label>
                    <Form.Control
                      placeholder="..."
                      name="zipcode"
                      {...register("zipcode", { required: true, minLength: 5, maxLength: 5, pattern: /^\d+$/ }, { minLength: 5, maxLength: 5 })}
                    />
                    {errors.zipcode && <Form.Text className="text-danger" >This field is required. 5 Digits only please.</Form.Text>}
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
                      {...register("username", { required: true, minLength: 5, maxLength: 35 })}
                    />
                    {errors.username && <Form.Text className="text-danger" >This field is required. Min: 5, Max: 35</Form.Text>}

                  </Form.Group>
                </Col>

                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                  <Form.Group controlId="">
                    <Form.Label className="mt-1">Email:</Form.Label>
                    <Form.Control
                      placeholder="..."
                      name="email"
                      {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })}
                    />
                    {errors.email && <Form.Text className="text-danger" >Please add valid email.</Form.Text>}

                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group controlId="formGrid.images">
                    <Form.Group controlId="formFile">
                      <Form.Label className="mt-1">Upload Article Images</Form.Label>
                      <Form.Control type="file" multiple accept="image/*"
                        {...register("images", { required: true })}
                      />
                      {errors.images && <Form.Text className="text-danger" >Please insert at least one post image!</Form.Text>}
                    </Form.Group>
                  </Form.Group>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                  <Form.Group controlId="">
                    <Form.Label className="mt-1">Price:</Form.Label>
                    <Form.Control
                      placeholder="..."
                      name="price"
                      {...register("price", { required: true, minLength: 1, maxLength: 5, pattern: /^\d+$/ })}
                    />
                    {errors.price && <Form.Text className="text-danger" >This field is required. No periods, or characters. Min: 1, Max: 5</Form.Text>}

                  </Form.Group>
                </Col>

              </Row>
              <Row>
                <Col>
                  <Form.Group controlId="formGrid.checkbox  ">
                    <br />
                    <Form.Check
                      type="switch"
                      id="custom-trade-switch_trade"
                      label="Interested in a Trade?"
                      name="trade"
                      {...register("trade")}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formGrid.checkbox  ">
                    <br />
                    <Form.Check
                      type="switch"
                      id="custom-trade-switch-firm_price"
                      label="Firm Price / No Negotation?"
                      name="firm_price"
                      {...register("firm_price")}
                    />
                  </Form.Group>
                </Col>
                <Form.Group controlId="formGrid.body">

                  <Row className="justify-content-between">
                    <Col>

                      <Form.Label className="mt-1">Post Body</Form.Label>
                    </Col>
                    <Col>
                      <small style={{ color: "grey" }}> {totalCharacters} / {MAX_TOTAL_POST_BODY_CHARACTERS} Characters</small>
                    </Col>
                  </Row>
                  <Form.Control
                    as="textarea"
                    rows="4"
                    name="pBody"
                    {...register("pBody", { required: true, minLength: 10, maxLength: 400 })}
                    onChange={(e) => setTotalCharacters(e.target.value.length)}
                  />
                  {errors.pBody && <Form.Text className="text-danger" >Please fill out this field! Follow min/max characters!</Form.Text>}
                </Form.Group>
              </Row>
              <br />

              {/* BUTTON GROUP */}
              <Stack direction="horizontal" className="justify-content-center gap-5 mb-4 text-lg-center mx-auto" >
                <Button
                  variant="danger"
                  className="text-light p-2 m-0"
                  onClick={() => {
                    setTotalCharacters(0)
                    setShow(false)
                  }}
                >
                  {" "}
                  <BackspaceReverse className="mb-1" onClick={() => {
                    reset()
                    setTotalCharacters(0)
                    ToastNotificationContext.setToast((prevToast => ({
                      ...prevToast,
                      show: true,
                      header: "Post Cancelled!",
                      message: `Post was not submitted!`,
                      error: "warning"
                    })))
                  }} />
                  Cancel Post{" "}
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
                <Button
                  variant="warning"
                  className="text-light p-2 m-0"
                  onClick={() => {
                    reset()
                    setTotalCharacters(0)
                    ToastNotificationContext.setToast((prevToast => ({
                      ...prevToast,
                      show: true,
                      header: "Form Resetted!",
                      message: `All form fields have been resetted.`,
                      error: "warning"
                    })))
                  }}
                >
                  {" "}
                  <BackspaceReverse className="mb-1" /> Reset Form{" "}
                </Button>
              </Stack>
            </Form>

          </Container>
        </Modal >
      </NotificationToast>
      { }
    </>
  );
}

export default BoardPostModal;
