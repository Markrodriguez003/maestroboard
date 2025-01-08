import { Nav, Navbar, Row, Col } from "react-bootstrap";
import siteLogo from "../assets/imgs/logo/Maestro-Logo-R.png";
import "./css/Header.css";

function Header(prop) {
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
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="mx-auto mt-2" />
        <Navbar.Collapse id="responsive-navbar-nav header-menu-start">
          <Nav className="text-center mt-3">
            <Nav.Link href="/board" className="">
              Community Board
            </Nav.Link>
            <Nav.Link href="/news" className="">
              News
            </Nav.Link>
            <Nav.Link href="/forum" className="">
              Forum
            </Nav.Link>
            <Nav.Link eventKey={2} href="/login" className="">
              Admin Log in
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div >
  );
}

export default Header;
