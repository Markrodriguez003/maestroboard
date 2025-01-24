
// REACT
import { useState, createContext } from 'react';

// COMPONENTS
import { Col, Row, Toast } from 'react-bootstrap';

/*----------------------------------------------------------------------------
|   ⚙️ Use: Notification Toast Context + Notification Toast for general use  
|       Error = Red toast | Success = Green toast  

|   🔧 Todo: More toast options | Animations 
|
|   📦 Returns: JSX component
*----------------------------------------------------------------------------*/


// CREATES CONTEXT TO PROVIDE TOAST TO ANY COMPONENT
const ToastContext = createContext({});
function NotificationToast({ children }) {

    // HANDLES SHOWING MODAL
    const [toast, setToast] = useState({ show: false, message: "", header: "", small: "", error: false });

    return (
        <ToastContext.Provider value={{ toast, setToast }}>
            {/* <Row className='w-100 p-0'> */}
            {/* <Col md={6} className="mb-2 w-100 p-0 " > */}
            <Toast show={toast.show}
                onClose={() => setToast(prevToast => ({
                    ...prevToast,
                    show: false
                }))}
                delay={4000}
                autohide={true}
                style={{ position: "fixed", bottom: "0px", right: "10px", zIndex: 9999999, backgroundColor:"white" }}
            >
                <Toast.Header style={{
                    background: toast.error === "failure" ? "red" : toast.error === "warning" ? "yellow" : "green",
                    color: toast.error === "failure" || toast.error === "successful" ? "red" : "black"
                }}>
                    <strong className="me-auto">{toast.header} </strong>
                    <small>{toast.small}</small>
                </Toast.Header>
                <Toast.Body>{toast.message}</Toast.Body>
            </Toast>
            {/* </Col> */}
            {/* </Row> */}

            {children}
        </ToastContext.Provider >
    );
}

export { NotificationToast, ToastContext };