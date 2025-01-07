


import { Nav, Navbar, Row, Col } from "react-bootstrap";
import siteLogo from "../assets/imgs/logo/Maestro-Logo-R.png";
import "./css/Header.css";

function GuestHeader(prop) {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="main-header p-3"
      >
        <a href="/myprofile">
          <img
            className="header-icon"
            src={siteLogo}
            alt="MaestroBoard Logo"
          />
        </a>
        <Row>
          <Col>
            <Navbar.Brand href="/home" className="header-title d-flex">
              <div className="header-title-group">

                MaestroBoard
                <small className="header-small-text">
                  buy. sell. trade. connect. |{"  "} Chase your Muse.{" "}
                </small>

              </div>
            </Navbar.Brand>
          </Col>
        </Row>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav header-menu-center">
          <Nav className="pl-5"></Nav>
          <Nav className="pl-5 ms-auto header-container header-menu-center">
            <Nav.Link href="/board" className="header-items pl-2">
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
        </Navbar.Collapse>
      </Navbar>
    </div >
  );
}

export default GuestHeader;
