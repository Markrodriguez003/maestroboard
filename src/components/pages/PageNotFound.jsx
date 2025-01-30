// COMPONENTS
import { Row, Button, Container, } from "react-bootstrap";

// ASSETS
import { FileEarmarkExcelFill } from "react-bootstrap-icons"
import { PersonFillLock } from "react-bootstrap-icons";

// CSS
import { SITE_COLORS } from "../css/site";

/*----------------------------------------------------------------------------
|   ⚙️ Use: A general "404 - Page not found" page. 
|                     
|   🔧 Todo: Make this more modular to add text/components as children to 
|             customize specific error page scenarios     
|             (log in token expired, article not found, page not found, ect).          
| 
|   📦 Returns: JSX component 
*----------------------------------------------------------------------------*/

function PageNotFound(props) {

    return (
        <>
            <Container className="col-11 col-lg-5 col-md-7 p-5 mt-4 pb-5 rounded-4 shadow-lg" style={{ backgroundColor: SITE_COLORS.main }}>

                <Row className="p-0 m-0 text-center gap-0" style={{ color: "white" }}>
                    <FileEarmarkExcelFill style={{ fontSize: "150px" }} className="mb-4" />
                    <hr />
                    <h1>404: PAGE NOT FOUND</h1>
                    <p>Hmm..</p>
                    <p>Sorry, that page cannot be found. </p>
                    <p>Please check the URL as the page may have moved </p>
                    {/* <br /> */}
                    <Button className="mt-3" href="/home" >Go Back Home</Button>
                </Row>
            </Container >
            <br />
            <br />
            <br />
        </>
    );
}

export default PageNotFound;



