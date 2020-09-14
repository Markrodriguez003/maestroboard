import { useState } from "react";
import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import BoardPostForm from "./BoardPostForm"
import { Reply, BackspaceReverse } from "react-bootstrap-icons"; // Importing Bootstrap Icon Components


function BoardPostModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);




  let [newPost, setNewPost] = useState({

  })

  // Function that creates new user via fetch POST request
  async function CREATE_NEW_POST(newPost) {
    fetch('/api/insertpost', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(newPost)

    })
      .then((res) => { return res })
      .then((data) => { console.log("data:" + data) })
      .catch(err => { console.log("An error has occurred:::: " + err) })
  }

  function formAccSubmit(e) {
    e.preventDefault();
    console.log(newPost);
    CREATE_NEW_POST(newPost);
  }

  return (
    <div>
      <Button variant="info" size="md" className="ml-3" onClick={handleShow}>
        Create Post!
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-center mx-auto">Create a Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <BoardPostForm / > */}

          <Form>
            <Form.Group>
              <Form.Label>Type of Post</Form.Label>
              <Form.Control
                as="select"
                onChange={e => setNewPost(newPost, newPost["type"] = e.target.value)}
                value={newPost.type}
              >
                <option>Selling Instrument</option>
                <option>Buying Instrument</option>
              </Form.Control>
              <br />
              <Form.Label>Instrument</Form.Label>
              <Form.Control
                as="select"
                onChange={e => setNewPost(newPost, newPost["instrument"] = e.target.value)}
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
              </Form.Control>
              <br />
              <Form.Group controlId="formGridTitle">
                <Form.Label>Post Title:</Form.Label>
                <Form.Control placeholder="..."
                  onChange={e => setNewPost(newPost, newPost["title"] = e.target.value)}
                  value={newPost.title}
                />
              </Form.Group>

              <Form.Group controlId="formGridPhone">
                <Form.Label>Phone Number:</Form.Label>
                <Form.Control placeholder="..."
                  onChange={e => setNewPost(newPost, newPost["number"] = e.target.value)}
                  value={newPost.phone}
                />
              </Form.Group>
              <Form.Group controlId="formGridEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control placeholder="..."
                  onChange={e => setNewPost(newPost, newPost["email"] = e.target.value)}
                  value={newPost.email}
                />
              </Form.Group>

              <Form.Group controlId="formGrid.body">
                <Form.Label>Post Body</Form.Label>
                <Form.Control as="textarea" rows="4"
                  onChange={e => setNewPost(newPost, newPost["pBody"] = e.target.value)}
                  value={newPost.pBody}
                />
              </Form.Group>
              <Form.Label>Price:</Form.Label>
              <Form.Control type="number" placeholder="Price"
                onChange={e => setNewPost(newPost, newPost["price"] = e.target.value)}
                value={newPost.price}
              />
              <Form.Group controlId="formGrid-trade">
       
                <Form.Check type="checkbox" label="...Or trade" />
                <Form.Text className="text-muted">
                  Tick this if you want to add the tag "Or trade" next to your price!
                    </Form.Text>
              </Form.Group>
              <Form.File id="browseImageControl" label="Load your post images" />
          
            </Form.Group>

          </Form>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" className="mx-auto text-center" onClick={handleClose}> <BackspaceReverse /> Cancel Post </Button>
          <Button variant="info" className="mx-auto text-center" onClick={formAccSubmit}><Reply /> Create Post</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default BoardPostModal;
