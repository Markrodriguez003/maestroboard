
// REACT
import { useState, createContext } from 'react';

// COMPONENTS
import { Col, Row, Toast } from 'react-bootstrap';

// CONTEXT
// import { ToastContext } from './ToastContext';


/*----------------------------------------------------------------------------
|   ⚙️ Use: Notification Toast Context + Notification Toast for general use  
|       Error = Red toast | Success = Green toast  

|   🔧 Todo: More toast options | Animations 
|
|   📦 Returns: JSX component
*----------------------------------------------------------------------------*/
// CREATES CONTEXT TO PROVIDE TOAST TO ANY COMPONENT
// show -> true/false: this will trigger toast
// toggleToast -> function(): this will hold logic to open/close toast
// export const ToastContext = createContext({ show: false, toggleToast: () => { } });
const ToastContext = createContext();

function NotificationToast({ children }) {

    // HANDLES SHOWING MODAL
    const [toast, setToast] = useState({ show: false, message: "", header: "", small: "", error: false });


    return (
        <ToastContext.Provider value={{ toast, setToast }}>
            <Row className='w-100 p-0'>
                <Col md={6} className="mb-2 w-100 p-0 " >
                    <Toast show={toast.show}
                        onClose={() => setToast(prevToast => ({
                            ...prevToast,
                            show: false
                        }))}
                        delay={4000}
                        autohide={true}
                        style={{ position: "fixed", bottom: "0px", right: "10px", zIndex: 9999999 }}
                    >
                        <Toast.Header style={{ background: toast.error ? "red" : "green" }} className='text-light' >
                            <strong className="me-auto">{toast.header} </strong>
                            <small>{toast.small}</small>
                        </Toast.Header>
                        <Toast.Body>{toast.message}</Toast.Body>
                    </Toast>
                </Col>
            </Row>

            {children}
        </ToastContext.Provider >
    );
}

export { NotificationToast, ToastContext };