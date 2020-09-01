import { useState } from "react";
import React from "react";
import { Button, Modal, Row, Col, Form } from "react-bootstrap";
import ReportForm from "./ReportForm";
import { Reply, BackspaceReverse } from "react-bootstrap-icons"; // Importing Bootstrap Icon Components

function CardReplyModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="text-center mx-auto">
      <Button variant="outline-danger" size="sm" className="ml-4 mr-4"  onClick={handleShow}>
        <small>Report Post</small>
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-center mx-auto font-weight-bold">
            Report Post
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ReportForm />
        </Modal.Body>
        <Modal.Footer className="modal-footer">
          <Button variant="danger" onClick={handleClose}>
            {" "}
            <BackspaceReverse /> Cancel Report{" "}
          </Button>
          <Button variant="info" className="mx-auto text-center reportPost-btn">
            <Reply /> Report Post
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CardReplyModal;
