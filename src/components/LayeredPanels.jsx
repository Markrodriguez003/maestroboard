
// COMPONENTS
import { Button, Container, Stack, Row, Col, Image } from "react-bootstrap";

// STYLING
import "./css/LayeredPanels.css";

/*----------------------------------------------------------------------------
|   ⚙️ Use: Layered Text panels with header layered (as seen in About page)       
|            behind body content
|
|   🔧 Todo: Change up shape and design of panels
|
|   📦 Returns: JSX component 
*----------------------------------------------------------------------------*/

function LayeredPanels(props) {
    const { header, children, containerBGColor, headerBGColor, contentBGColor } = props;

    return (
        <>
            <Row
                style={{
                    backgroundColor: containerBGColor,
                    color: "white",
                    position: "relative"
                }}
                className="m-0 p-0 mt-5 mx-auto">



                <div className="m-0 p-0 text-center shadow-lg"
                    style={{
                        backgroundColor: headerBGColor,
                        height: "200px",
                        width: "100%",
                        position: "absolute",
                        zIndex: 1
                    }}>
                    <div style={{ padding: "35px" }}>
                        <h1 className="display-2 text-center text-light">{header} </h1>
                    </div>

                </div>


                {/* CONTENT BODY */}
                <div style={{

                    backgroundColor: contentBGColor,

                }}
                    className="mx-auto p-5 shadow-lg content-container">
                    <div style={{ overflowWrap: "break-word" }}>
                        {children}
                    </div>
                </div>
            </Row>

        </>
    )
}


export default LayeredPanels;