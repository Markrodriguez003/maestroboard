
import "./css/Footer.css";
import { Navbar, Row, Col, Nav, Container } from "react-bootstrap";
import mainLogo from "../assets/imgs/logo/Maestro-Logo-R.png"

function Footer() {
  return (
    <Container fluid className="p-0 m-0">
      <Navbar sticky="bottom"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      // className="main-footer"
      >
        <a href="#">
          <img
            className="footer-icon"
            src={mainLogo}
            alt="MaestroBoard Logo"
          ></img>
        </a>
        <Row>
          <Col>
            <Navbar.Brand href="#home" className="footer-title d-flex float-right">
              MaestroBoard
              <small className="footer-small-text">
                buy. sell. trade.connect. |{"  "}
                <span className="footer-muse-small">

                  Chase your <span>

                    muse
                  </span>
                  .{" "}
                </span>
              </small>
            </Navbar.Brand>
          </Col>
          <Col className="w-100" style={{ backgroundColor: "red", width: "100%" }}>
            <Nav className="pl-5"></Nav>
            <Nav className="pl-5 ms-auto header-container header-menu-center">
              <Nav.Link href="/board" className="w-100" style={{ backgroundColor: "purple" }} >
                Community Board
              </Nav.Link>
              <Nav.Link href="/news" >
                News
              </Nav.Link>
              <Nav.Link href="/forum" >
                Forum
              </Nav.Link>
              <Nav.Link eventKey={2} href="/login" >
                Log in
              </Nav.Link>
            </Nav>

          </Col>
        </Row>
        {/* <small style={{textAlign:"center", color:"white"}}>Copyright 2022</small> */}
      </Navbar>
    </Container >
  );
}

export default Footer;
