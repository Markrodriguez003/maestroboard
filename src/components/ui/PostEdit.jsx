// REACT
import { useState, useEffect, useContext } from "react";

// COMPONENTS
import axios from "axios";
import { Button, Container, Form, Spinner, Row, Col, Stack } from "react-bootstrap";
import { ToastContext } from "../context/NotificationToast";
import { ConfirmationContext } from "../context/ConfirmationModal";
import LoadPageElement from "./LoadingPageElement";

// LIBRARIES
import imageUploader from "../../../server/scripts/imageUploader";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router";
import { Navigate } from 'react-router-dom';
import deletePost from "../../../server/scripts/deletePost";
import { useLocation } from "react-router-dom";

// ASSETS
import { Reply, BackspaceReverse, FileEarmarkExcelFill, Search, FilePostFill, XCircleFill, Trash2Fill, PinAngleFill } from "react-bootstrap-icons";

// DATA

// POST FORM OPTIONS
import post_types from "../../data/postTypes.json";
const FORM_OPTIONS = post_types[0];

// DESIGN CSS
import { SITE_COLORS } from "../css/site";
// import deleteImage from "../../../server/scripts/deleteImage";


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



// ! move to component
// LOADING PAGE TO SHOW WHEN FRONT END IS TRYING TO GRAB POST FROM DB
function LoadingArticle() {
    return (
        <Container as={"article"} className={"p-5  w-100 shadow-lg text-light rounded text-center"} style={{ backgroundColor: "rgba(16, 41, 51, 1)" }}>
            <Search style={{ fontSize: "150px" }} className="mb-4" />
            <h1>Post is loading...</h1>
            <br />
            <Spinner style={{ color: "teal", fontSize: "25px", width: "50px", height: "50px" }} />
        </Container >
    )
}

/*----------------------------------------------------------------------------
|   ⚙️ Use: Form to edit & delete a post via URL params mongoDB id 
|   
|   🔧 Todo:
|
|   📦 Returns: JSX component
*----------------------------------------------------------------------------*/


function PostEdit() {

    // MAKES SURE PAGE GOES TO TOP
    const location = useLocation();

    // CHECKS TO SEE WHAT POST TYPE USER IS USING FOR POST FORM
    const [postSubType, setPostSubType] = useState("");

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth" // Optional for smooth scrolling
        });
    }, [location]);

    // HANDLES NOTIFICATION MODAL CONTEXT
    const Confirmation = useContext(ConfirmationContext);

    // HOLDS TOAST TOGGLE AND VALUE
    // CONTEXT SETTERS & GETTERS FOR NOTIFICATION TOAST 
    const Notification = useContext(ToastContext);

    // NAVIGATE
    let navigate = useNavigate();

    // POST STATE
    const [post, setPost] = useState({});

    // POST IMAGE GALLERY
    const [postImageGallery, setPostImageGallery] = useState([]);

    // POST LOADING STATE
    const [postLoadingState, setPostLoadingState] = useState("loading");

    // GRABS STRING DATA FROM URL
    const params = useParams();

    // FORM VALIDATION STATE 
    const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();

    // SETS NEW POST OBJECT
    let [newPost, setNewPost] = useState({
        type: "",
        subType: "",
        title: "",
        email: "",
        phoneNumber: "",
        images: "",
        pBody: "",
        price: "",
        trade: false,
        phone: "",
        firm_price: false,
        public_images_id: [],
        image_urls: [],
        secure_images_urls: [],
        caption: "",

    });

    // PULLS POST DATA FROM URL ID
    useEffect(() => {

        // GRABS ALL POST FROM DB
        async function grabPost() {
            await axios
                .get(`http://localhost:3005/api/posts/id/${params.id}`)
                .then(async (response) => {
                    setPostLoadingState("loading");
                    console.log(`POST RESPONSE: ${JSON.stringify(response)}`)
                    setPost(await response.data.post[0]);

                    // GATHERS IMAGES INTO AN ARRAY FOR LIGHTBOX (USESTATE)
                    const tempGalleryArry = response.data.post[0].image_urls.map((image, i) => {
                        return {
                            src: `${image} `,
                            alt: `Post-image-${i}`,
                            width: "100%",
                            height: "100%",
                        }
                    })

                    setPostImageGallery(tempGalleryArry);

                    setPostLoadingState(("successful"));

                })
                .catch((err) => {
                    console.log(`error POST DATA: ${JSON.stringify(err.status)}`)
                    setPostLoadingState("error")
                }
                );
        }

        grabPost();
    }, [])

    // MAX POST BODY CHARACTERS
    const MAX_TOTAL_POST_BODY_CHARACTERS = 2500;

    // TOTAL POST BODY CHARACTERS FOR POST BODY CHARACTER MIN/MAX
    const [totalCharacters, setTotalCharacters] = useState(0);

    // HANDLES SHOWING OF MODAL
    const [show, setShow] = useState(false);

    // HOLDS TEMPORARY IMAGE DATA ARRAY
    const [tempImageArr, setTempImageArr] = useState([]);

    // HOLDS LOADING STATE OF FORM SUBMITTION
    const [submitLoading, setSubmitLoading] = useState(false);

    //  SIDE EFFECT THAT KICKS WHEN USER SUBMITS FORM.
    //  TAKES IMAGE FILES -> UPLOADS IT TO CLOUDINARY -> SAVES IMAGE URLS/ID TO NEW POST STATE
    //  PUSHES NEWLY CREATE POST TO DB
    useEffect(() => {

        // PUSHES POST POST TO DB
        async function UPDATE_POST(newPost) {
            // console.log(`RESPONSE! ${JSON.stringify(params)}`)
            try {

                axios.put(`http://localhost:3005/api/posts/edit/id/${params.id}`, newPost, config).then((response) => {
                    console.log(`RESPONSE! ${JSON.stringify(response)}`)
                    console.log(`NEW POST! ${JSON.stringify(newPost)}`)

                })
                // SETS TOAST OF SUBMITTED POST!
                Notification.setToast((prevToast => ({
                    ...prevToast,
                    show: true,
                    header: "Post has been created!",
                    message: "Refresh page to see post populated on website!",
                    error: false
                })))
            } catch (error) {
                Notification.setToast((prevToast => ({
                    ...prevToast,
                    show: true,
                    header: "Post could not be created!",
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
                            publicArry = [...publicArry, data.publicID];
                            urlArry = [...urlArry, data.url];
                            secureArry = [...secureArry, data.secureURL];

                        }).catch((error) => {
                            Notification.setToast((prevToast => ({
                                ...prevToast,
                                show: true,
                                header: "Images could not be inserted!",
                                message: "Sorry about that! We ran into an issue on our end. Please try again later!",
                                error: true
                            })))
                            return;
                        })
                }

                // UPDATES IMAGE DATA URLS/IDS TO SET POST
                let finalizedPost = {
                    ...newPost, public_images_id: publicArry,
                    image_urls: urlArry,
                    secure_images_urls: secureArry
                }

                // PASSES POST WITH RESPECTATIVE POPULATED IMAGES TO FUNCTION INSERT DB 
                await UPDATE_POST(finalizedPost);

                // CLOSES OUT MODAL
                setShow(false);

                // TURNS OFF SUBMISSION SPINNER 
                setSubmitLoading(false);

                // RESETS FORM
                reset();

                Notification.setToast((prevToast => ({
                    ...prevToast,
                    show: true,
                    header: "Post Edited!",
                    message: `Post has been successfully edited!.`,
                    error: "success"
                })));
                navigate('/dashboard', { replace: true });


            } catch (error) {

                Notification.setToast((prevToast => ({
                    ...prevToast,
                    show: true,
                    header: "Images URLs could not be received!",
                    message: "Sorry about that! We ran into an issue on our end. Please try again later!",
                    error: true
                })))
            }
        }

        // LISTES FOR FORM SUBMISSION TO TRIGGER LOADING OF IMAGES TO POST STATE
        if (submitLoading === true) {
            // SUBMIT POST DATA TO CHECKS THEN BACKEND
            postFormSubmit();
        }
    }, [submitLoading]);

    // GRABS POST TYPES TO POPULATE SELECT OPTION IN POST CREATION SELECTION 
    // const article_categories = article_types[0].article_types;

    // FORM SUBMIT HANDLER
    const onSubmit = (data) => {
        // LIMIT THE # OF IMAGES THAT CAN BE UPLOADED
        const MAXFILES = 5;

        // IF MAX IMAGE FILE UPLOAD IS REACHED EMPTY VALUE & NOT SEND FORM
        if (data.images.length > MAXFILES) {

            // RESETS UPLOADED IMAGES IN ONPUT BUFFER
            setValue('files', '');

            // DISPLAY ERROR MSG
            Notification.setToast((prevToast => ({
                ...prevToast,
                show: true,
                header: "Max image cound reached!",
                message: `You attempted to upload more than 5 images. The max images allowed is ${MAXFILES}`,
                error: true
            })))
            return;
        }

        //*  IF POST IS COMPLETED CORRECTLY
        // IF MAX IMAGE FILES LIMIT NOT REACHS SETS FILES INTO A STATE TO BE USE ELSEWHERE
        setTempImageArr(data.images);

        // UPDATE POST STATE
        setNewPost((prev) => (
            {
                ...prev,
                ...data
            }
        ))

        // SETS SUBMIT LOADER SPINNER WHICH IS TRIGGERS SIDE EFFECT OF  
        // GRABBING URL IMAGES AND UPLOADING POST TO DB
        setSubmitLoading(true);
    };

    useEffect(() => {
        async function deletingPost() {
            try {
                const result = await deletePost(params.id, config);
                console.log(JSON.stringify(result))
                reset()
                setTotalCharacters(0);
                console.log(`POST IMAGES DELETION: --> ${JSON.stringify(post)}`)
                Notification.setToast((prevToast => ({
                    ...prevToast,
                    show: true,
                    header: "Post Deleted!",
                    message: `The post has been removed from the database!`,
                    error: "successful"
                })))
                navigate('/dashboard', { replace: true });
            } catch (error) {
                // console.log(`Error: ${error}`)
                Notification.setToast((prevToast => ({
                    ...prevToast,
                    show: true,
                    header: "Post Cannot be Deleted!",
                    message: `The post has not been removed from the database! We encountered an error! Please try again! -  ${error}`,
                    error: true
                })));
            }

            // IF USER CONFIRMS DELETION OF POST VIA CONFIRMATION MODAL
        }
        if (Confirmation.choice) {
            deletingPost();
        }
    }, [Confirmation.choice])


    return (
        <>

            <Container style={{ backgroundColor: SITE_COLORS.secondary, color: "white" }} className="" fluid>
                {postLoadingState === "successful" ?
                    <Form className="p-3 m-0 " onSubmit={handleSubmit(onSubmit)}>
                        <Stack>
                            <h1 className="mt-0 text-center"><PinAngleFill className="mb-3" /> {" "} Edit a Post</h1>
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
                                        defaultValue={FORM_OPTIONS.post_types[0]}
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
                                        defaultValue={FORM_OPTIONS.post_sub_types_instruments[0]}
                                    >

                                        {

                                            postSubType === "Buying" || postSubType === "Selling"
                                                ? FORM_OPTIONS.post_sub_types_instruments.map((option, index) => (<option key={`${option}-${index}`}>{option}</option>))
                                                : postSubType === "Community" ? FORM_OPTIONS.post_sub_types_community.map((option, index) => (<option key={`${option}-${index}`}>{option}</option>))
                                                    : postSubType === "Advertisement" ? FORM_OPTIONS.post_sub_types_advertisements.map((option, index) => (<option key={`${option}-${index}`}>{option}</option>))
                                                        : FORM_OPTIONS.post_sub_types_instruments.map((option, index) => (<option key={`${option}-${index}`}>{option}</option>))
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
                                placeholder="..."
                                {...register("title", { required: true })}
                                defaultValue={post.title}
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
                                        defaultValue={post.phone}

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
                                        defaultValue={post.zip}

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
                                        defaultValue={post.username}

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
                                        defaultValue={post.email}

                                    />
                                    {errors.email && <Form.Text className="text-danger" >Please add valid email.</Form.Text>}

                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group controlId="formGrid.images">
                                    <Form.Group controlId="formFile">
                                        <Form.Label className="mt-1">Upload Post Images</Form.Label>
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
                                        defaultValue={post.price}

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
                                    // defaultValue={post.trade}
                                    // checked={post.trade}

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
                                    // defaultValue={post.firm_price}
                                    // checked={post.firm_price}
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
                                    defaultValue={post.body}
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
                                    Notification.setToast((prevToast => ({
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
                                variant="danger"
                                className="text-light p-2 m-0"
                                onClick={() => {
                                    Confirmation.setOptions((prev) => ({
                                        ...prev, bgColor: SITE_COLORS.danger, header: "Delete article?"
                                    }))
                                    Confirmation.setShow(true)
                                }}
                            >
                                {" "}
                                <Trash2Fill className="mb-1" /> Delete article{" "}
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
                                    : <span> <Reply className="mb-1" /> Edit Post </span>
                                }
                            </Button>
                            <Button
                                variant="warning"
                                className="text-light p-2 m-0"
                                onClick={() => {
                                    reset()
                                    setTotalCharacters(0)
                                    Notification.setToast((prevToast => ({
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
                    :
                    postLoadingState === "loading" ?
                        <LoadPageElement
                            bgColor={SITE_COLORS.secondary}
                            header="Loading post!"
                            icon={<Search style={{ fontSize: "120px", marginLeft: "auto", marginRight: "auto" }} />}
                            spinner={true}
                        >
                            <hr />
                        </LoadPageElement>
                        :
                        postLoadingState ?
                            <LoadPageElement
                                bgColor={SITE_COLORS.secondary}
                                header="Error trying to find post!"
                                icon={<FileEarmarkExcelFill style={{ fontSize: "120px", marginLeft: "auto", marginRight: "auto" }} />}
                                spinner={false}
                            >
                                <hr />
                                <p>Sorry about that! We could not find this post!</p>
                                <Button onClick={() => { console.log('testing b utton') }}>Home</Button>
                            </LoadPageElement>
                            :
                            <LoadPageElement
                                bgColor={SITE_COLORS.secondary}
                                header="Error trying to find post!"
                                icon={<FileEarmarkExcelFill style={{ fontSize: "120px", marginLeft: "auto", marginRight: "auto" }} />}
                                spinner={false}
                            >
                                <hr />
                                <p>Sorry about that! We could not find this post!</p>
                                <Button onClick={() => { console.log('testing b utton') }}>Home</Button>
                            </LoadPageElement>
                }

            </Container>

        </>
    )


}

export default PostEdit;


