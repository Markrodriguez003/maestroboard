import { useState } from "react";
import React from "react";
import { Button, Modal } from "react-bootstrap";
import ReplyForm from "./ReplyForm"
import { Reply, BackspaceReverse } from "react-bootstrap-icons"; // Importing Bootstrap Icon Components


function CardReplyModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="primary" size="sm" onClick={handleShow}>
      Reply via Maestroboard
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-center mx-auto">Send a MaestroBoard Reply Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                  <ReplyForm / >
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" className="mx-auto text-center" onClick={handleClose}> <BackspaceReverse /> Cancel Reply </Button>
          <Button variant="info" className="mx-auto text-center"><Reply/> Send Reply</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CardReplyModal;
