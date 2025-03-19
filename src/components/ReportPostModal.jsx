
// LIBRARIES
import { useState, useContext } from "react";
import { ToastContext, NotificationToast } from "../components/context/NotificationToast";

// COMPONENTS
import { Button, Modal } from "react-bootstrap";
import ReportForm from "./ReportForm";

// ASSETS
import {
  Reply,
  BackspaceReverse,
  ExclamationCircleFill,
} from "react-bootstrap-icons"; // Importing Bootstrap Icon Components


// DESIGN - STYLING
import { SITE_COLORS } from "./css/site";


/*----------------------------------------------------------------------------
|   ⚙️ Use: Post Reporting Modal
|                     
|   🔧 Todo:
| 
|   📦 Returns: JSX component 
*----------------------------------------------------------------------------*/


function CardReplyModal() {

  // HOLDS TOAST TOGGLE AND VALUE
  // CONTEXT SETTERS & GETTERS FOR NOTIFICATION TOAST 
  const ToastNotificationContext = useContext(ToastContext);


  // HANDLES CLOSING AND OPENING OF REPORT PANEL MODAL
  const [show, setShow] = useState(false);


  function handleClose(type) {
    setShow(false);
    if (type === "report")
      // SETS TOAST OF SUBMITTED ARTICLE!
      ToastNotificationContext.setToast((prevToast => ({
        ...prevToast,
        show: true,
        header: "Post has been reported!",
        message: "Our Maestroboard admins will look into this post. Thank you for reporting!",
        error: false
      })))
  }

  const handleShow = () => setShow(true);




  return (
    <div className="d-block text-end ">
      <Button
        variant="danger"
        size="sm"
        className="p-1 m-0"
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
        <Modal.Header closeButton style={{ backgroundColor: SITE_COLORS.main, color: "white" }}>
          <Modal.Title className="" style={{ color: "white" }} >
            Report Post
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: SITE_COLORS.main, color: "white" }}>
          <ReportForm />
        </Modal.Body>
        <Modal.Footer className="modal-footer" style={{ backgroundColor: SITE_COLORS.main, color: "white" }}>
          <Button
            variant="danger"
            className="mx-auto text-center"
            onClick={() => handleClose()}
          >
            <BackspaceReverse /> Cancel
          </Button>
          <Button
            variant="success"
            className="mx-auto text-center"
            onClick={() => handleClose("report")}
          >

            <Reply /> Report
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CardReplyModal;
