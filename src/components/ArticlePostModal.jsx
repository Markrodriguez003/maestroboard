// COMPONENTS
import { useState } from "react";
import axios from "axios";
import { Button, Modal, Form, Container, Row, Col } from "react-bootstrap";

// ASSETS
import { Reply, BackspaceReverse, FilePostFill, XCircleFill } from "react-bootstrap-icons"; // Importing Bootstrap Icon Components

// DESIGN CSS
import { SITE_COLORS } from "./css/site";


function ArticlePostModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let [newArticle, setNewArticle] = useState({});

    // Function that creates new user via fetch POST request
    async function CREATE_NEW_ARTICLE(newArticle) {

        try {
            const response = await axios.post('http://localhost:3005/api/insert-article',
                newArticle);
            console.log(`Inside response message! --> ${JSON.stringify(response)}`)
            console.log(`Inside response message! -- > ${JSON.stringify(response)} `)
        } catch (error) {
            console.log(`Here is the error inserting new post::: ${error}`)
        }
    }

    async function formAccSubmit(e) {
        e.preventDefault();
        await CREATE_NEW_ARTICLE(newArticle);
        setShow(false);
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
                            onChange={(e) =>
                                setNewArticle(newArticle, (newArticle["title"] = e.target.value))
                            }
                        />
                        <Form.Group controlId="">
                            <Form.Label className="mt-1">Sub-Title:</Form.Label>
                            <Form.Control
                                placeholder="..."
                                onChange={(e) =>
                                    setNewArticle(newArticle, (newArticle["subTitle"] = e.target.value))
                                }
                            />
                        </Form.Group>
                        <Row>
                            <Col>
                                <Form.Group className="" controlId="">
                                    <Form.Label className="mt-1">Author</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="@"
                                        onChange={(e) =>
                                            setNewArticle(newArticle, (newArticle["author"] = e.target.value))
                                        }
                                    />
                                </Form.Group>
                            </Col>



                            <Col>
                                <Form.Label className="mt-1">Article Type:</Form.Label>
                                <br />
                                <select
                                    className="form-select"
                                    aria-label="Default select example"
                                    onChange={(e) =>
                                        setNewArticle(newArticle, (newArticle["articleType"] = e.target.value))
                                    }
                                >
                                    {/* //! MOVE THIS TO JSON */}
                                    <option>General</option>
                                    <option>Events</option>
                                    <option>Announcements</option>
                                    <option>Electronic Music</option>
                                    <option>Recording and Studio Gear</option>
                                    <option>Composition</option>
                                </select>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group controlId="formGrid.images">
                                    <Form.Group controlId="formFile">
                                        <Form.Label className="mt-1">Upload Article Images</Form.Label>
                                        <Form.Control type="file" multiple accept="image/*"
                                            onChange={handleFileChange} />
                                    </Form.Group>
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group controlId="">
                                    <Form.Label className="mt-1">Image Caption:</Form.Label>
                                    <Form.Control
                                        placeholder="..."
                                        onChange={(e) =>
                                            setNewArticle(newArticle, (newArticle["caption"] = e.target.value))
                                        }
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group controlId="formGrid.body">
                            <Form.Label className="mt-1">Article Body</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows="4"
                                onChange={(e) =>
                                    setNewArticle(newArticle, (newArticle["body"] = e.target.value))
                                }
                            />
                        </Form.Group>
                        <Form.Group controlId="">
                            <Form.Label className="mt-1">Article Link:</Form.Label>
                            <Form.Control
                                placeholder="..."
                                onChange={(e) =>
                                    setNewArticle(newArticle, (newArticle["link"] = e.target.value))
                                }
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
            </Modal>
        </>
    );
}

export default ArticlePostModal;
