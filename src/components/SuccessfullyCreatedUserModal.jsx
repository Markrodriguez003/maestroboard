import { useState } from "react";

import { Button, Modal } from "react-bootstrap";
import SuccessfullyCreatedUserForm from "./SuccessfullyCreatedUserForm"
import { ArrowReturnLeft } from "react-bootstrap-icons"; // Importing Bootstrap Icon Components


function SuccessfullyCreatedUserModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="info" size="md" className="ml-3" type="submit" onClick={handleShow}>
        Create User Account
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-center mx-auto">Successfully Created New User!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SuccessfullyCreatedUserForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="info" className="mx-auto text-center" onClick={handleClose}> <ArrowReturnLeft /> Welcome Aboard! </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default SuccessfullyCreatedUserModal;
