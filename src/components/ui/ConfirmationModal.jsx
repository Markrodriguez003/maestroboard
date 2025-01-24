// REACT
import { useState, useEffect, createContext } from "react";

// COMPONENTS
import { Button, Container, Form, Spinner, Row, Col, Modal, Stack } from "react-bootstrap";

// LIBRARIES
import { useParams, useNavigate } from "react-router";

// ASSETS
import { Reply, BackspaceReverse, FileEarmarkExcelFill, Search, FilePostFill, XCircleFill, Trash2Fill } from "react-bootstrap-icons"; // Importing Bootstrap Icon Components

// DESIGN CSS
import { SITE_COLORS } from "../css/site";


/*----------------------------------------------------------------------------
|   ⚙️ Use: Modal for confirming y/n actions  
|   
|   🔧 Todo: Modulate this modal to be a general modal for other forms? | 
|       Add more design choices
|
|   📦 Returns: JSX component
*----------------------------------------------------------------------------*/

const ConfirmationContext = createContext({
    confirmationShow: true,
    setConfirmationShow: () => { },
    confirmationChoice: false,
    setConfirmationChoice: () => { },
    options: {}
});

function ConfirmationModal({ header, body, children, bgColor }) {

    // HANDLES MODAL DISPLAY VARIABLES
    const [show, setShow] = useState(false);

    // HANDLES MODAL OPTIONS (BACKGROUND COLOR, ECT)
    const [options, setOptions] = useState({
        bgColor: SITE_COLORS.main,
        color: "white"
    })

    // HANDLE OPENING & CLOSING OF  MODAL
    // function handleConfirmation() {
    //     setShow(!show);
    // }
    // HANDLES CONFIRMATION T/F
    const [choice, setChoice] = useState(false);

    return (

        <ConfirmationContext.Provider value={{
            show,
            setShow,
            choice,
            setChoice,
            options,
            setOptions
        }}>
            <Container style={{ backgroundColor: SITE_COLORS.lightMain, color: "white" }} className="w-75" fluid>
                <Modal show={show} centered onHide={() => setShow(false)}>
                    <Modal.Header closeButton style={{ backgroundColor: `${options.bgColor}`, color: "white" }}>
                        <Modal.Title>Confirm Action: {header}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body >Are you sure you want to perform this action?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={() => {
                            setChoice(true)
                            setShow(false)

                        }}>
                            Confirm
                        </Button>
                        <Button variant="danger" onClick={() => {
                            setShow(false)
                            setChoice(false)
                        }
                        }>
                            Cancel
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
            {children}
        </ConfirmationContext.Provider >
    )
}

export { ConfirmationModal, ConfirmationContext };


