
// COMPONENTS
import { Image, Nav, Navbar, Row, Col } from "react-bootstrap";
import { PersonFillLock, Newspaper } from "react-bootstrap-icons";
import MainLogo from "./MainLogo";

// ASSETS
import { SITE_COLORS } from "../css/site";

// CSS
import "../css/Header.css";

function Header() {
  return (

    <Navbar
      collapseOnSelect
      expand="lg"
      className="p-2 mb-1 justify-content-lg-between justify-content-md-between justify-content-sm-center justify-content-xl-between "
      style={{
        backgroundColor: SITE_COLORS.main,
        boxShadow: "0px 2px 53px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0)"
      }}
    >
      <Row>
        <Col >
          <Row>
            <Navbar.Brand href="/home" >
              <MainLogo />
            </Navbar.Brand>
          </Row>
        </Col>
      </Row>
      <Row sm={12} md={12} className="m-0 p-0" >
        <Col className="justify-content-lg-center justify-content-md-between justify-content-sm-center text-center m-0 p-0" >
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className=" mt-2" style={{ backgroundColor: "teal", color: "teal" }} />
          <Navbar.Collapse className="m-0 p-0" id="responsive-navbar-nav header-menu-start">
            <Nav className="m-0 p-0 gap-2" >
              <Nav.Link href="/board" className="header-list-item " >
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
