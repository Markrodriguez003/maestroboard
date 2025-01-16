// COMPONENTS
import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Modal, Form, Container, Row, Col, Spinner } from "react-bootstrap";

// LIBRARIES
import imageUploader from "../../server/scripts/imageUploader";

// CLOUDINARY
import { AdvancedImage } from '@cloudinary/react';
import { fill } from "@cloudinary/url-gen/actions/resize";
import { cld } from "../../server/scripts/imageRepository";

// ASSETS
import { Reply, BackspaceReverse, FilePostFill, XCircleFill } from "react-bootstrap-icons"; // Importing Bootstrap Icon Components

// DATA
import article_types from "../data/articleTypes.json";

// DESIGN CSS
import { SITE_COLORS } from "./css/site";

function ArticlePostModal() {

    // SETS NEW ARTICLE OBJECT
    let [newArticle, setNewArticle] = useState({
        title: "",
        subTitle: "",
        author: "",
        category: "",
        subCategory: "",
        body: "",
        images: "",
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

    // UPDATER STATE
    const [updateForm, setUpdateForm] = useState(false);

    // useEffect(() => {
    //     console.log(`New Article:::: ${JSON.stringify(newArticle)}`);
    // }, [])

    useEffect(() => {

        // PUSHES ARTICLE TO DB
        async function CREATE_NEW_ARTICLE(newArticle) {
            try {
                const response = axios.post('http://localhost:3005/api/insert-article',
                    newArticle);
                // ! ADDITIONAL ERROR HANDLING HERE FOR ABOVE RESPONSE
                // console.log(`Inside response message! --> ${JSON.stringify(response)}`)
                // console.log(`Inside response message! -- > ${JSON.stringify(response)} `)
            } catch (error) {
                console.log(`Here is the error inserting new post::: ${error}`)
            }
        }

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
                            console.log(`${i} - Public ID: ${data.publicID}`);
                            console.log(`${i} - Secure URL: ${data.secureURL}`);
                            console.log(`${i} - URL: ${data.url}`);
                            publicArry = [...publicArry, data.publicID];
                            urlArry = [...urlArry, data.url];
                            secureArry = [...secureArry, data.secureURL];

                        }).catch((error) => {
                            console.log(`Error updating state with images::${error}`)
                            return;
                        })
                }



                console.log(`Public array: ${publicArry}`);
                console.log(`URL array: ${urlArry}`);
                console.log(`Secure array: ${secureArry}`);

                // UPDATES IMAGE DATA URLS/IDS TO SERTARTICLE
                let finalizedArticle = {
                    ...newArticle, public_images_id: publicArry,
                    image_urls: urlArry,
                    secure_images_urls: secureArry
                }

                // setNewArticle((prevArticle) => ({
                //     ...prevArticle,
                //     public_images_id: publicArry,
                //     image_urls: urlArry,
                //     secure_images_urls: secureArry
                //     public_images_id: ["FUCK"].filter(element => element !== undefined),
                //     image_urls: ["YOU."].filter(element => element !== undefined),
                //     secure_images_urls: ["DICKHEAD"].filter(element => element !== undefined)
                // }));


                // TEST
                // console.log(`New Article:::: ${JSON.stringify(newArticle)}`);

                // UPDATES NEWARTICLE STATE
                setUpdateForm(true);

                // PASSES ARTICLE WITH RESPECTATIVE POPULATED IMAGES TO FUNCTION INSERT DB 
                await CREATE_NEW_ARTICLE(finalizedArticle);

                // CLOSES OUT MODAL
                setShow(false);

                // TURNS OFF SUBMISSION SPINNER 
                setSubmitLoading(false);

                // UPDATES NEWARTICLE STATE
                setUpdateForm(false);

            } catch (error) { console.log(`Error receiving image URLs/IDs : ${error}`); }




        }


        // LISTES FOR FORM SUBMISSION TO TRIGGER LOADING OF IMAGES TO ARTICLE STATE
        if (submitLoading === true) {
            console.log(`Loading State is True `);
            articleFormSubmit();
        }
        // return () => {

        // };
    }, [submitLoading]);


    // GRABS ARTICLE TYPES TO POPULATE SELECT OPTION IN ARTICLE CREATION SELECTION 
    const article_categories = article_types[0].article_types;

    // HANDLES FORM CHANGE TO SET FIELD VALUES TO NEW ARTICLE STATE
    const handleChange = (event) => {
        setNewArticle({
            ...newArticle,
            [event.target.name]: event.target.value
        });
    };

    // LIMITS IMAGE FILES THAT CAN BE UPLOADED
    const handleFileChange = (event) => {

        // LIMIT THE # OF IMAGES THAT CAN BE UPLOADED
        const MAXFILES = 5;

        // IF MAX IMAGE FILE UPLOAD IS REACHED EMPTY VALUE & NOT SEND FORM
        if (event.target.files.length > MAXFILES) {

            // !REPLACE WITH TOAST
            alert(`You can only upload a maximum of ${MAXFILES} files.`);
            event.target.value = null
            return;
        }

        // IF MAX IMAGE FILES LIMIT NOT REACHS SETS FILES INTO A STATE TO BE USE ELSEWHERE
        setTempImageArr(event.target.files);
    }

    return (
        <>
            <Button size="md" className="text-light" onClick={() => setShow(true)}>
                Create an Article!
            </Button>
            <Modal
                show={show}
                onHide={() => setShow(false)}
                backdrop="static"
                keyboard={false}
                size="lg"
            >
                <Container style={{ backgroundColor: SITE_COLORS.main, color: "white" }} className="" fluid>
                    <span
                        onClick={() => setShow(false)}
                        style={{ display: "inline-block", right: "15px", top: "4px", fontSize: "30px", position: "absolute", cursor: "pointer" }}>
                        <XCircleFill />
                    </span>
                    <Form className="p-3 m-0 ">
                        <h1 className="mt-0 text-center"><FilePostFill className="mb-3" /> {" "} Create an Article</h1>
                        <Form.Label className="mt-1">Title:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder=""
                            name="title"
                            onChange={handleChange}
                        />
                        <Row>
                            <Col>
                                <Form.Group controlId="">
                                    <Form.Label className="mt-1">Sub-Title:</Form.Label>
                                    <Form.Control
                                        placeholder="..."
                                        name="subTitle"
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="">
                                    <Form.Label className="mt-1">Article Type:</Form.Label>
                                    <br />
                                    {/* //! CHANGE THIS TO BOOTSTRAP SELECT */}
                                    <select
                                        className="form-select"
                                        aria-label="Default select example"
                                        name="category"
                                        onChange={handleChange}
                                    >
                                        {article_categories.map(function (optionType, i) {
                                            return (< option key={`${optionType}-${i}`} > {optionType}</option>)
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
                                        onChange={handleChange}

                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Label className="mt-1">Author</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="@"
                                    name="author"
                                    onChange={handleChange}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group controlId="formGrid.images">
                                    <Form.Group controlId="formFile">
                                        <Form.Label className="mt-1">Upload Article Images</Form.Label>
                                        <Form.Control type="file" multiple accept="image/*"
                                            onChange={handleFileChange}
                                        />
                                    </Form.Group>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="">
                                    <Form.Label className="mt-1">Image Caption:</Form.Label>
                                    <Form.Control
                                        placeholder="..."
                                        name="caption"
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group controlId="formGrid.body">
                            <Form.Label className="mt-1">Article Body</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows="4"
                                name="body"
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="">
                            <Form.Label className="mt-1">Article Link:</Form.Label>
                            <Form.Control
                                placeholder="..."
                                name="link"
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Form>
                    <Row className="justify-content-center mb-4 text-lg-center">
                        <Col>
                            <Button
                                variant="danger"
                                onClick={() => setShow(false)}
                            >
                                {" "}
                                <BackspaceReverse /> Cancel Article{" "}
                            </Button>
                        </Col>
                        <Col>
                            <Button
                                className="text-light"
                                // onClick={articleFormSubmit}
                                onClick={() => setSubmitLoading(true)}
                            >
                                {submitLoading ?
                                    <>
                                        <span className="spinner-border spinner-border-sm " role="status" aria-hidden="true"></span>
                                        {" "} Submitting...
                                    </>
                                    : <span> <Reply /> Create Article </span>
                                }
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </Modal >
        </>
    );
}

export default ArticlePostModal;
