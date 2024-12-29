import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
// import BoardPostForm from "./BoardPostForm";
import { Reply, BackspaceReverse } from "react-bootstrap-icons"; // Importing Bootstrap Icon Components

function BoardPostModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let [newPost, setNewPost] = useState({});

  // Function that creates new user via fetch POST request
  async function CREATE_NEW_POST(newPost) {
    fetch("/api/insertpost", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(newPost),
    })
      .then((res) => {
        return res;
      })
      .then((data) => {
        console.log("data:" + data);
      })
      .catch((err) => {
        console.log("An error has occurred:::: " + err);
      });
  }

  function formAccSubmit(e) {
    e.preventDefault();
    console.log(newPost);
    CREATE_NEW_POST(newPost);
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
            class="form-select"
            aria-label="Default select example"
            onChange={(e) =>
              setNewPost(newPost, (newPost["type"] = e.target.value))
            }
            value={newPost.type}
          >
            <option>Selling Instrument</option>
            <option>Buying Instrument</option>
          </select>
          <br />

          <small>Type of Instrument</small>
          <br />
          <select
            class="form-select"
            aria-label="Default select example"
            onChange={(e) =>
              setNewPost(newPost, (newPost["instrument"] = e.target.value))
            }
            value={newPost.instrument}
          >
            <option>Guitar</option>
            <option>Bass</option>
            <option>Drums</option>
            <option>Percussion</option>
            <option>Synthesizer</option>
            <option>Brass</option>
            <option>Woodwinds</option>
            <option>Microphones</option>
            <option>Studio Equipment</option>
          </select>

          <div>
            <Form.Group controlId="">
              <Form.Label>Post Title:</Form.Label>
              <Form.Control
                placeholder="..."
                onChange={(e) =>
                  setNewPost(newPost, (newPost["title"] = e.target.value))
                }
                value={newPost.title}
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
                value={newPost.email}
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
                value={newPost.phone}
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
                value={newPost.pBody}
              />
            </Form.Group>
            <Form.Label>Price:</Form.Label>
            <Form.Control
              type="number"
              placeholder="Price"
              onChange={(e) =>
                setNewPost(newPost, (newPost["price"] = e.target.value))
              }
              value={newPost.price}
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
