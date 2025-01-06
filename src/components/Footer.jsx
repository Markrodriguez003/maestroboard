
import "./css/Footer.css";
import { Navbar, Row, Col, Nav, Container } from "react-bootstrap";
import mainLogo from "../assets/imgs/logo/Maestro-Logo-R.png"

function Footer() {
  return (
    <Container fluid style={{width:"100% important"}} className="p-0 m-0">

      <Navbar sticky="bottom"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="main-footer"
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
                  {" "}
                  Chase your <span>
                    <a
                      href="https://en.wikipedia.org/wiki/Euterpe#:~:text=Euterpe%20(%2Fju%CB%90%CB%88t,named%20muse%20of%20lyric%20poetry."
                      className="muse-anchor"
                    >
                      muse
                    </a></span>
                  .{" "}
                </span>
              </small>
            </Navbar.Brand>
          </Col>
          <Col>
            <Nav className="pl-5"></Nav>
            <Nav className="pl-5 ms-auto header-container header-menu-center">
              <Nav.Link href="/board" className="header-items">
                Community Board
              </Nav.Link>
              <Nav.Link href="/news" className="header-items">
                News
              </Nav.Link>
              <Nav.Link href="/forum" className="header-items">
                Forum
              </Nav.Link>
              <Nav.Link eventKey={2} href="/login" className="header-items">
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
