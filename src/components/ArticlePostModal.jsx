// COMPONENTS
import { useState } from "react";
import axios from "axios";
import { Button, Modal, Form, Container, Row, Col } from "react-bootstrap";

// ASSETS
import { Reply, BackspaceReverse, FilePostFill, XCircleFill } from "react-bootstrap-icons"; // Importing Bootstrap Icon Components

// DATA
import article_types from "../data/articleTypes.json";

// DESIGN CSS
import { SITE_COLORS } from "./css/site";


function ArticlePostModal() {

    // HANDLES SHOWING OF MODAL
    const [show, setShow] = useState(false);

    // HANDLES OPENING AND CLOSING OF MODAL
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // 
    let [newArticle, setNewArticle] = useState({
        title: "",
        subTitle: "",
        author: "",
        category: "",
        subCategory: "",
        body: "",
        image: "",
        caption: "",
        link: "",
    });

    // GRABS ARTICLE TYPES TO POPULATE SELECT OPTION IN ARTICLE CREATION SELECTION 
    const article_Types = article_types[0].article_types;

    // Function that creates new user via fetch POST request
    async function CREATE_NEW_ARTICLE(newArticle) {

        try {
            const response = await axios.post('http://localhost:3005/api/insert-article',
                newArticle);
            // console.log(`Inside response message! --> ${JSON.stringify(response)}`)
            // console.log(`Inside response message! -- > ${JSON.stringify(response)} `)
        } catch (error) {
            console.log(`Here is the error inserting new post::: ${error}`)
        }
    }

    // HANDLES FORM CHANGE
    const handleChange = (event) => {
        setNewArticle({
            ...newArticle,
            [event.target.name]: event.target.value
        });
    };

    async function formAccSubmit(e) {
        e.preventDefault();
        console.log(`This is the article being submitted:: ${JSON.stringify(newArticle)}`)


        // SENDS ARTICLE TO BE POSTED TO DB
        await CREATE_NEW_ARTICLE(newArticle);
        setShow(false);
        // CLEARS ANY PRIOR INSERTED ARTICLES
        // setNewArticle({});
    }


    // SETS FILES THAT CAN BE UPLOADED
    const [postImageFiles, setPostImageFiles] = useState([]);

    // LIMITS FILES THAT CAN BE UPLOADED
    const handleFileChange = (event) => {
        const files = event.target.files;

        // Limit the number of files
        const maxFiles = 5; // Set your desired limit here
        if (files.length > maxFiles) {
            alert(`You can only upload a maximum of ${maxFiles} files.`);
            event.target.value = null
            return;
        }

        setPostImageFiles([...files]);
    };
    return (
        <>
            <Button size="md" className="text-light" onClick={handleShow}>
                Create an Article!
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size="lg"
            >
                <Container style={{ backgroundColor: SITE_COLORS.main, color: "white" }} className="" fluid>
                    <span
                        onClick={handleClose}
                        style={{ display: "inline-block", right: "15px", top: "4px", fontSize: "30px", position: "absolute", cursor: "pointer" }}>
                        <XCircleFill />
                    </span>
                    <Form className="p-3 m-0 ">
                        <h1 className="mt-0 text-center"><FilePostFill className="mb-3" /> {" "} Create an Article</h1>

                        <Form.Label className="mt-1">Title:</Form.Label>
                        {/* //! CHANGE THIS TO BOOTSTRAP SELECT */}
                        <Form.Control
                            type="text"
                            placeholder=""
                            name="title"
                            // value={newArticle.title}
                            onChange={handleChange}
                        // onChange={(e) =>
                        //     setNewArticle(prevArticle => ({ ...prevArticle, title: e.target.value }))
                        // }
                        />
                        <Row>
                            <Col>
                                <Form.Group controlId="">
                                    <Form.Label className="mt-1">Sub-Title:</Form.Label>
                                    <Form.Control
                                        placeholder="..."
                                        name="subTitle"
                                        // value={newArticle.subTitle}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="">
                                    <Form.Label className="mt-1">Article Type:</Form.Label>
                                    <br />
                                    <select
                                        className="form-select"
                                        aria-label="Default select example"
                                        name="category"
                                        // value={newArticle.category}
                                        onChange={handleChange}
                                    >
                                        {article_Types.map(function (optionType, i) {
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
                                        // value={newArticle.subCategory}
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
                                    // value={newArticle.author}
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
                                        // name="author"
                                        // value={newArticle.author}
                                        // onChange={handleChange}


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
                                        // value={newArticle.caption}
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
                                // value={newArticle.body}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="">
                            <Form.Label className="mt-1">Article Link:</Form.Label>
                            <Form.Control
                                placeholder="..."
                                name="link"
                                // value={newArticle.link}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Form>
                    <Row className="justify-content-center mb-4 text-lg-center">
                        <Col>
                            <Button
                                variant="danger"
                                // className="mx-auto text-center"
                                onClick={handleClose}
                            >
                                {" "}
                                <BackspaceReverse /> Cancel Article{" "}
                            </Button>
                        </Col>
                        <Col>
                            <Button
                                className="text-light"
                                onClick={formAccSubmit}
                            >
                                <Reply /> Create Article
                            </Button>
                        </Col>
                    </Row>

                </Container>
            </Modal >
        </>
    );
}

export default ArticlePostModal;
