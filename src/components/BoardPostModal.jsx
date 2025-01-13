// COMPONENTS
import { useState } from "react";
import axios from "axios";
import { Button, Modal, Form, Container, Row, Col } from "react-bootstrap";

// ASSETS
import { Reply, BackspaceReverse, PinAngleFill, XCircleFill } from "react-bootstrap-icons"; // Importing Bootstrap Icon Components

// DESIGN CSS
import { SITE_COLORS } from "./css/site";


function BoardPostModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let [newPost, setNewPost] = useState({});

  // Function that creates new user via fetch POST request
  async function CREATE_NEW_POST(newPost) {

    try {
      const response = await axios.post('http://localhost:3005/api/insertpost',
        newPost);
      console.log(`Inside response message! --> ${JSON.stringify(response)}`)
      console.log(`Inside response message! -- > ${JSON.stringify(response)} `)
    } catch (error) {
      console.log(`Here is the error inserting new post::: ${error}`)
    }
  }

  async function formAccSubmit(e) {
    e.preventDefault();
    await CREATE_NEW_POST(newPost);
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
      <Button size="md" onClick={handleShow}>
        Create Post!
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Container style={{ backgroundColor: SITE_COLORS.secondary, color: "white" }} className="" fluid>
          <span
            onClick={handleClose}
            style={{ display: "inline-block", right: "15px", top: "4px", fontSize: "30px", position: "absolute", cursor: "pointer" }}>
            <XCircleFill />
          </span>
          <Form className="p-3 m-0 ">
            <h1 className="mt-0 text-center"><PinAngleFill className="mb-3" /> {" "} Create a Post</h1>
            <Row>

              <Col>
                <Form.Label className="mt-1">Post Type:</Form.Label>
                {/* //! CHANGE THIS TO BOOTSTRAP SELECT */}
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={(e) =>
                    setNewPost(newPost, (newPost["type"] = e.target.value))
                  }
                  value={newPost.type}
                >
                  <option>Selling </option>
                  <option>Buying </option>
                </select>
              </Col>

              <Col>
                <Form.Label className="mt-1">Post Type:</Form.Label>

                <br />
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={(e) =>
                    setNewPost(newPost, (newPost["instrument"] = e.target.value))
                  }
                >

                  {/* //! MOVE THIS TO JSON */}
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
              </Col>
            </Row>
            <Form.Group controlId="">
              <Form.Label className="mt-1">Post Title:</Form.Label>
              <Form.Control
                placeholder="..."
                onChange={(e) =>
                  setNewPost(newPost, (newPost["title"] = e.target.value))
                }
              />
            </Form.Group>

            <Form.Group className="" controlId="">
              <Form.Label className="mt-1">Your Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="@"
                onChange={(e) =>
                  setNewPost(newPost, (newPost["title"] = e.target.value))
                }
              />
            </Form.Group>

            <Row>
              <Col>
                <Form.Group controlId="formGridPhone">
                  <Form.Label className="mt-1">Your Phone Number</Form.Label>
                  <Form.Control
                    placeholder="#"
                    onChange={(e) =>
                      setNewPost(newPost, (newPost["number"] = e.target.value))
                    }
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formGrid.images">
                  <Form.Group controlId="formFile">
                    <Form.Label className="mt-1">Upload Post Images</Form.Label>
                    <Form.Control type="file" multiple accept="image/*"
                      onChange={handleFileChange} />
                  </Form.Group>
                </Form.Group>
              </Col>
            </Row>

            <Form.Group controlId="formGrid.body">
              <Form.Label className="mt-1">Post Body</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                onChange={(e) =>
                  setNewPost(newPost, (newPost["pBody"] = e.target.value))
                }
              />
            </Form.Group>
            <Row>

              <Col>
                <Form.Label className="mt-1">Price:</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Price"
                  onChange={(e) =>
                    setNewPost(newPost, (newPost["price"] = e.target.value))
                  }
                />
              </Col>

              <Col>

                <Form.Group controlId="formGrid-trade" className="mt-5">
                  {/* <Form.Text className="text-light">
                    Tick this if you want to add the tag "Or trade" next to your
                    price!
                  </Form.Text> */}
                  <Form.Check type="checkbox" label="...Or trade" />
                </Form.Group>
              </Col>

            </Row>

          </Form>
          <Row className="justify-content-center mb-4 text-lg-center">
            <Col>
              <Button
                variant="danger"
                // className="mx-auto text-center"
                onClick={handleClose}
              >
                {" "}
                <BackspaceReverse /> Cancel Post{" "}
              </Button>
            </Col>
            <Col>
              <Button
                className="text-light"
                onClick={formAccSubmit}
              >
                <Reply /> Create Post
              </Button>
            </Col>
          </Row>
        </Container>
      </Modal>
    </>
  );
}

export default BoardPostModal;
