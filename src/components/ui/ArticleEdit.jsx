import { useState, useEffect, useContext } from "react";

// COMPONENTS
import axios from "axios";
import { Button, Container, Form, Spinner, Row, Col, Stack } from "react-bootstrap";
import { ToastContext } from "./NotificationToast";

// LIBRARIES
import imageUploader from "../../../server/scripts/imageUploader";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router";

// ASSETS
import { Reply, BackspaceReverse, FileEarmarkExcelFill, Search, FilePostFill, XCircleFill } from "react-bootstrap-icons"; // Importing Bootstrap Icon Components

// DATA
import article_types from "../../data/articleTypes.json";

// DESIGN CSS
import { SITE_COLORS } from "../css/site";

// LOADING PAGE TO SHOW WHEN FRONT END IS TRYING TO GRAB ARTICLE FROM DB
function LoadingArticle() {
    return (
        <Container as={"article"} className={"p-5  w-100 shadow-lg text-light rounded text-center"} style={{ backgroundColor: "rgba(16, 41, 51, 1)" }}>
            <Search style={{ fontSize: "150px" }} className="mb-4" />
            <h1>Article is loading...</h1>
            <br />
            <Spinner style={{ color: "teal", fontSize: "25px", width: "50px", height: "50px" }} />
        </Container >
    )
}

// PAGE TO SHOW ERROR TRYING TO FIND ARTICLE
function ErrorLoadingArticle() {
    return (
        <Container as={"article"} className={"p-5  w-100 shadow-lg text-light rounded text-center"} style={{ backgroundColor: "rgba(16, 41, 51, 1)" }}>
            <FileEarmarkExcelFill style={{ fontSize: "150px" }} className="mb-4" />
            <hr />
            <h1>Article Cannot be found!</h1>
            <br />
            <Button className="mt-3" href="/home" >Go Back Home</Button>
        </Container >
    )
}

function ArticleEdit() {

    // ARTICLE STATE
    const [article, setArticle] = useState({});

    // ARTICLE IMAGE GALLERY
    const [articleImageGallery, setArticleImageGallery] = useState([]);

    // ARTICLE LOADING STATE
    const [articleLoadingState, setArticleLoadingState] = useState("loading");

    // GRABS STRING DATA FROM URL
    const params = useParams();

    // FORM VALIDATION STATE 
    const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();

    // console.log(`UseForm ::${JSON.stringify(article)}`)

    // SETS NEW ARTICLE OBJECT
    let [newArticle, setNewArticle] = useState({
        title: "",
        subTitle: "",
        author: "",
        category: "General", // Default
        subCategory: "",
        body: "",
        images: "",
        link: "",
        public_images_id: [],
        image_urls: [],
        secure_images_urls: [],
        caption: "",

    });

    // PULLS ARTICLE DATA FROM URL ID
    useEffect(() => {

        // GRABS ALL ARTICLES FROM DB
        async function grabArticle() {
            await axios
                .get(`http://localhost:3005/api/article/id/${params.id}`)
                .then(async (response) => {
                    setArticleLoadingState("loading");
                    setArticle(await response.data.article[0]);

                    // GATHERS IMAGES INTO AN ARRAY FOR LIGHTBOX (USESTATE)
                    const tempGalleryArry = response.data.article[0].image_urls.map((image, i) => {
                        return {
                            src: `${image} `,
                            alt: `Article-image-${i}`,
                            width: "100%",
                            height: "100%",
                        }
                    })

                    setArticleImageGallery(tempGalleryArry);

                    setArticleLoadingState(("successful"));

                })
                .catch((err) => {
                    console.log(`error ARTICLE DATA: ${JSON.stringify(err.status)}`)
                    setArticleLoadingState("error")
                }
                );
        }

        grabArticle();
    }, [])



    // MAX POST BODY CHARACTERS
    const MAX_TOTAL_POST_BODY_CHARACTERS = 2500;

    // TOTAL POST BODY CHARACTERS FOR POST BODY CHARACTER MIN/MAX
    const [totalCharacters, setTotalCharacters] = useState(0);

    // HOLDS TOAST TOGGLE AND VALUE
    // CONTEXT SETTERS & GETTERS FOR NOTIFICATION TOAST 
    const { toast, setToast } = useContext(ToastContext);

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
        async function UPDATE_ARTICLE(newArticle) {
            console.log(`RESPONSE! ${JSON.stringify(params)}`)

            try {
                // const response = axios.post('http://localhost:3005/api/insert-article', newArticle);
                axios.put(`http://localhost:3005/api/edit/article/id/${params.id}`, newArticle).then((response) => {
                    console.log(`RESPONSE! ${JSON.stringify(response)}`)
                    console.log(`NEW ARTICLE! ${JSON.stringify(newArticle)}`)

                })
                // SETS TOAST OF SUBMITTED ARTICLE!
                // setToast((prevToast => ({
                //     ...prevToast,
                //     show: true,
                //     header: "Article has been created!",
                //     message: "Refresh page to see article populated on website!",
                //     error: false
                // })))
            } catch (error) {
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
        async function articleFormSubmit() {

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
                let finalizedArticle = {
                    ...newArticle, public_images_id: publicArry,
                    image_urls: urlArry,
                    secure_images_urls: secureArry
                }

                // PASSES ARTICLE WITH RESPECTATIVE POPULATED IMAGES TO FUNCTION INSERT DB 
                await UPDATE_ARTICLE(finalizedArticle);

                // CLOSES OUT MODAL
                setShow(false);

                // TURNS OFF SUBMISSION SPINNER 
                setSubmitLoading(false);

                // RESETS FORM
                reset();


            } catch (error) {

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
            articleFormSubmit();
        }
    }, [submitLoading]);

    // GRABS ARTICLE TYPES TO POPULATE SELECT OPTION IN ARTICLE CREATION SELECTION 
    const article_categories = article_types[0].article_types;

    // FORM SUBMIT HANDLER
    const onSubmit = (data) => {
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
        setNewArticle((prev) => (
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
            <Container style={{ backgroundColor: SITE_COLORS.lightMain, color: "white" }} className="w-75" fluid>

                {articleLoadingState === "successful" ?
                    <Form className="p-3 m-0 " onSubmit={handleSubmit(onSubmit)}>
                        <Stack>
                            <h1 className="mt-0 text-center"><FilePostFill className="mb-3" /> {" "} Edit an Article</h1>
                            <small className="mx-auto" style={{ display: "block" }}> {" "} Fill out all form fields!</small>
                        </Stack>
                        <Form.Group>

                            <Form.Label className="mt-1">Title:</Form.Label>
                            <Form.Control
                                type="text"
                                name="title"
                                placeholder="Enter Article Title"
                                {...register("title", { required: true, minLength: 12, maxLength: 30, })}
                                defaultValue={article.title}

                            />
                            {errors.title && <Form.Text className="text-danger" >This field is required. Min: 12, Max: 30</Form.Text>}
                        </Form.Group>
                        <Row>
                            <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                                <Form.Group controlId="">
                                    <Form.Label className="mt-1">Sub-Title:</Form.Label>
                                    <Form.Control
                                        placeholder="..."
                                        name="subTitle"
                                        {...register("subTitle", { required: true, minLength: 12, maxLength: 30, })}
                                        defaultValue={article.subTitle}
                                    />
                                    {errors.subTitle && <Form.Text className="text-danger" >This field is required. Min: 12, Max: 30</Form.Text>}

                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="">
                                    <Form.Label className="mt-1">Article Type:</Form.Label>
                                    <br />
                                    <select
                                        className="form-select"
                                        aria-label="Default select article category"
                                        name="category"
                                        {...register("category", { required: true })}
                                        defaultValue={article.category}
                                    >
                                        {article_categories.map(function (optionType, i) {

                                            return (< option key={`${optionType}-${i}`} value={optionType}> {optionType}</option>)
                                        })}
                                    </select>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="" controlId="">
                                    <Form.Label className="mt-1">Sub-Category</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder=""
                                        name="subCategory"
                                        // onChange={handleChange}
                                        {...register("subCategory", { required: true })}
                                        defaultValue={article.subCategory}
                                    />
                                    {errors.subCategory && <Form.Text className="text-danger" >This field is required</Form.Text>}

                                </Form.Group>
                            </Col>
                            <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                                <Form.Group>

                                    <Form.Label className="mt-1">Author</Form.Label>
                                    <Form.Control
                                        type="author"
                                        placeholder="@"
                                        name="author"
                                        {...register("author", { required: true, minLength: 5, maxLength: 65, pattern: /[a-z]/gi })}
                                        defaultValue={article.author}
                                    />
                                    {errors.author && <Form.Text className="text-danger" >This field is required. Only characters. Min: 5, Max: 65</Form.Text>}
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                                <Form.Group controlId="formGrid.images">
                                    <Form.Group controlId="formFile">
                                        <Form.Label className="mt-1">Upload Article Images</Form.Label>
                                        <Form.Control type="file" multiple accept="image/*"
                                            // onChange={(event) => handleFileChange(event)}
                                            {...register("images", { required: true })}
                                        // defaultValue={article.public_images_id}
                                        />
                                        {errors.images && <Form.Text className="text-danger" >Please insert an article image!</Form.Text>}

                                    </Form.Group>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="">
                                    <Form.Label className="mt-1">Image Caption:</Form.Label>
                                    <Form.Control
                                        placeholder="..."
                                        name="caption"
                                        // onChange={handleChange}
                                        {...register("caption", { required: false, minLength: 12, maxLength: 30 })}
                                        defaultValue={article.caption}
                                    />
                                    {errors.caption && <Form.Text className="text-danger" >Please insert an article image! Min: 12, Max: 30</Form.Text>}

                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group controlId="formGrid.body">
                            <Row>
                                <Col>
                                    <Form.Label className="mt-1">Article Body</Form.Label>
                                </Col>
                                <Col>
                                    <small>{totalCharacters} / {MAX_TOTAL_POST_BODY_CHARACTERS} Characters</small>
                                </Col>

                            </Row>
                            <Form.Control
                                as="textarea"
                                rows="4"
                                name="body"
                                {...register("body", { required: true, minLength: 35, maxLength: 2500 })}
                                onChange={(e) => setTotalCharacters(e.target.value.length)}
                                defaultValue={article.body}

                            />
                            {errors.body && <Form.Text className="text-danger" >Please fill out this field! Min: 35, Max: 2500</Form.Text>}

                        </Form.Group>
                        <br />
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
                                <BackspaceReverse className="mb-1" /> Cancel Article{" "}
                            </Button>
                            <Button
                                className="text-light p-2 m-0"
                                // onClick={() => setSubmitLoading(true)}
                                type="submit"
                            >
                                {submitLoading ?
                                    <>
                                        <span className="spinner-border spinner-border-sm " role="status" aria-hidden="true"></span>
                                        {" "} Submitting...
                                    </>
                                    : <span> <Reply className="mb-1" /> Create Article </span>
                                }
                            </Button>
                            <Button
                                variant="warning"
                                className="text-dark p-2 m-0"
                                onClick={() => {
                                    reset()
                                    setTotalCharacters(0)
                                    setToast((prevToast => ({
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
                    articleLoadingState === "loading" ? <LoadingArticle />
                        :
                        articleLoadingState ? <ErrorLoadingArticle /> : <ErrorLoadingArticle />}
            </Container>
        </>
    )


}

export default ArticleEdit;


