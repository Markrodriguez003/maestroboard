

// COMPONENTS
import { Navbar, Row, Col, Nav, Container, Image } from "react-bootstrap";
import MainLogo from "./MainLogo";

// ASSETS
import { SITE_COLORS } from "../css/site";
import { PersonFillLock, ArrowUpCircle } from "react-bootstrap-icons";

// LIBRARY
import { useLocation } from 'react-router-dom';

// CSS
import "../css/Footer.css";


function Footer() {

  function scrollToTop() {
    window.scrollTo(0, 0);
  };




  return (

    <Navbar
      className="p-0 mt-5 justify-content-center"
      style={{
        backgroundColor: SITE_COLORS.main,

      }}
    >
      <Row className="p-4 mt-0 justify-content-center justify-content-sm-center ">
        <Col className="justify-content-center justify-content-sm-center ">
          <Row>
            <ArrowUpCircle style={{ color: "white", fontSize: "35px", cursor: "pointer" }} onClick={scrollToTop} />
          </Row>
          <Row>
            <MainLogo />
          </Row>
          <Row className="p-0 mt-0 justify-content-center justify-content-sm-center ">
            <Nav className="justify-content-lg-center justify-content-md-center justify-content-sm-center text-center mx-auto text-center mt-2">
              <Nav.Link href="/board" className="header-list-item" >
                Community Board
              </Nav.Link>
              <Nav.Link href="/news" className="header-list-item" >
                News
              </Nav.Link>
              <Nav.Link href="/forum" className="header-list-item">
                Forum
              </Nav.Link>
            </Nav>
          </Row>
          <Row>
            <Nav className="justify-content-lg-center justify-content-md-center justify-content-sm-center text-center mx-auto text-center mt-0">
              <Nav.Link href="/" className="header-list-item" >
                Help
              </Nav.Link>
              <Nav.Link href="/" className="header-list-item" >
                Safety
              </Nav.Link>
              <Nav.Link href="/" className="header-list-item">
                Privacy
              </Nav.Link>
              <Nav.Link href="/" className="header-list-item">
                Terms
              </Nav.Link>
              <Nav.Link href="/" className="header-list-item">
                About
              </Nav.Link>
            </Nav>
          </Row>
          <Row>
            <Nav className="justify-content-lg-center justify-content-md-center justify-content-sm-center text-center mx-auto text-center mt-0">
              <Nav.Link eventKey={2} href="/login" className="header-list-item">
                <PersonFillLock style={{ verticalAlign: "center" }} /> Admin Log in
              </Nav.Link>
            </Nav>
          </Row>
          <Row>
            <small style={{ color: "darkgrey", textAlign: "center", marginTop: "20px" }}>
              &copy; Maestroboard 2022
            </small>
          </Row>
        </Col>
      </Row >
    </Navbar >
  );
}

export default Footer;
