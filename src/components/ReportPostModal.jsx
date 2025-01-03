import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import ReportForm from "./ReportForm";
import {
  Reply,
  BackspaceReverse,
  ExclamationCircleFill,
} from "react-bootstrap-icons"; // Importing Bootstrap Icon Components

function CardReplyModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="d-block text-center ">
      <Button
        variant="danger"
        size="lg"
        className="mt-4 p-2"
        onClick={handleShow}
      >
        {" "}
        <ExclamationCircleFill /> Report
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
          <Button
            variant="danger"
            className="mx-auto text-center"
            onClick={handleClose}
          >
            <BackspaceReverse /> Cancel
          </Button>
          <Button variant="info" className="mx-auto text-center">
            <Reply /> Report
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CardReplyModal;
