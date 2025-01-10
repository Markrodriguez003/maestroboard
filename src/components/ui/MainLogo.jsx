

// COMPONENTS
import { Navbar, Row, Col, Nav, Container, Image } from "react-bootstrap";

// ASSETS
import mainLogo from "../../assets/imgs/logo/Maestro-Logo-R.png"


// LIBRARIES
import { useNavigate } from 'react-router-dom';

// CSS
import "../css/MainLogo.css";

function MainLogo() {

    const navigate = useNavigate();

    const handleLinkClick = () => {
        navigate('/');
    };

    return (

        <Row className="m-0 p-0 gap-0 w-auto" style={{ cursor: "pointer" }} onClick={handleLinkClick} >
            <Col className="m-0 p-0 brand-logo-title gap-0 justify-content-lg-start flex-grow-0"   >
                <Image src={mainLogo} className="brand-logo-img m-0 p-0" />
            </Col>
            <Col className="m-0 p-0 gap-0 align-content-end" >
                <h2 className="brand-logo-title">
                    MAESTROBOARD
                </h2>
                <small className="brand-title-small">
                    buy. sell. trade. connect. |{"  "} Chase your Muse.{" "}
                </small>
            </Col>
        </Row>



    );
}

export default MainLogo;
