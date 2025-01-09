
// COMPONENTS
import { Image, Nav, Navbar, Row, Col } from "react-bootstrap";

// ASSETS
import siteLogo from "../assets/imgs/logo/Maestro-Logo-R.png";
import { SITE_COLORS } from "./css/site";
import { PersonFillLock, Newspaper } from "react-bootstrap-icons";
// CSS
import "./css/Header.css";

function Header(prop) {
  return (

    <Navbar
      collapseOnSelect
      expand="lg"
      className="p-4 mb-5 justify-content-lg-between justify-content-md-between justify-content-sm-center justify-content-xl-between"
      style={{
        backgroundColor: SITE_COLORS.main,
        boxShadow: "0px 2px 53px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0)"
      }}
    >
      <Row>
        <Col >
          <Row>
            <Navbar.Brand href="/home" className="header-title d-flex">
              <a href="/home" className="header-icon-hover">
                <Image
                  className="header-icon"
                  src={siteLogo}
                  alt="MaestroBoard Logo"
                />
              </a>
              <div className="header-title-group">
                MaestroBoard
                <small className="header-small-text">
                  buy. sell. trade. connect. |{"  "} Chase your Muse.{" "}
                </small>
              </div>
            </Navbar.Brand>
          </Row>
        </Col>
      </Row>
      <Row sm={12} md={12}  >
        <Col className="justify-content-lg-center justify-content-md-between justify-content-sm-center text-center mx-auto" >
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="mx-auto mt-2" style={{ backgroundColor: "teal", color: "teal" }} />
          <Navbar.Collapse id="responsive-navbar-nav header-menu-start">
            <Nav className="justify-content-lg-center justify-content-md-center justify-content-sm-center text-center mx-auto text-center mt-3">
              <Nav.Link href="/board" className="header-list-item" >
                Community Board
              </Nav.Link>
              <Nav.Link href="/news" className="header-list-item" >
                News
              </Nav.Link>
              <Nav.Link href="/forum" className="header-list-item">
                Forum
              </Nav.Link>
              <Nav.Link eventKey={2} href="/login" className="header-list-item">
                <PersonFillLock style={{ verticalAlign: "center" }} /> Admin Log in
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Col>
      </Row >
    </Navbar >

  );
}

export default Header;
