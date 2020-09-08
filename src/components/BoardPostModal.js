import { useState } from "react";
import React from "react";
import { Button, Modal } from "react-bootstrap";
import BoardPostForm from "./BoardPostForm"
import { Reply, BackspaceReverse } from "react-bootstrap-icons"; // Importing Bootstrap Icon Components


function BoardPostModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
                  <BoardPostForm / >
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" className="mx-auto text-center" onClick={handleClose}> <BackspaceReverse /> Cancel Post </Button>
          <Button variant="info" className="mx-auto text-center"><Reply/> Create Post</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default BoardPostModal;
