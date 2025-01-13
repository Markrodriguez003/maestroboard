// COMPONENTS
import { useState } from "react";
import axios from "axios";
import { Button, Modal, Form } from "react-bootstrap";

// ASSETS
import { Reply, BackspaceReverse } from "react-bootstrap-icons"; // Importing Bootstrap Icon Components

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

  return (
    <div className="mx-auto text-center mb-3 mt-4 shadow-sm">
      <Button variant="info" size="lg" onClick={handleShow}>
        Create Post!
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="text-center"
      >
        <h1 className="mt-2">Create a Post</h1>

        <Form className="p-5">
          <small>Type of Post</small>
          <br />
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
          <br />

          <small>Type of </small>
          <br />
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={(e) =>
              setNewPost(newPost, (newPost["instrument"] = e.target.value))
            }
            // value={newPost.instrument}
          >
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

          <div>
            <Form.Group controlId="">
              <Form.Label>Post Title:</Form.Label>
              <Form.Control
                placeholder="..."
                onChange={(e) =>
                  setNewPost(newPost, (newPost["title"] = e.target.value))
                }
              />
            </Form.Group>
          </div>

          <div>
            <Form.Group className="mb-3" controlId="">
              <small>Your Email</small>
              <Form.Control
                type="email"
                placeholder="@"
                onChange={(e) =>
                  setNewPost(newPost, (newPost["title"] = e.target.value))
                }
              />
            </Form.Group>
          </div>
          <div>
            <Form.Group controlId="formGridPhone">
              <small>Your Phone Number</small>

              <Form.Control
                placeholder="#"
                onChange={(e) =>
                  setNewPost(newPost, (newPost["number"] = e.target.value))
                }
              />
            </Form.Group>
          </div>
          <div>
            <Form.Group controlId="formGrid.body">
              <Form.Label>Post Body</Form.Label>
              <Form.Control
                as="textarea"
                rows="4"
                onChange={(e) =>
                  setNewPost(newPost, (newPost["pBody"] = e.target.value))
                }
              />
            </Form.Group>
            <Form.Label>Price:</Form.Label>
            <Form.Control
              type="number"
              placeholder="Price"
              onChange={(e) =>
                setNewPost(newPost, (newPost["price"] = e.target.value))
              }
            />
            <Form.Group controlId="formGrid-trade">
              <Form.Check type="checkbox" label="...Or trade" />
              <Form.Text className="text-muted">
                Tick this if you want to add the tag "Or trade" next to your
                price!
              </Form.Text>
            </Form.Group>
            {/* <Form.File id="browseImageControl" label="Load your post images" /> */}
          </div>
        </Form>
        <Button
          variant="danger"
          className="mx-auto text-center"
          onClick={handleClose}
        >
          {" "}
          <BackspaceReverse /> Cancel Post{" "}
        </Button>
        <Button
          variant="info"
          className="mx-auto text-center"
          onClick={formAccSubmit}
        >
          <Reply /> Create Post
        </Button>
      </Modal>
    </div>
  );
}

export default BoardPostModal;
