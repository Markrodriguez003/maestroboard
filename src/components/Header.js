import React from "react";
import "./Header.css";
import { Nav, Navbar, Row, Col } from "react-bootstrap";

function Header() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="main-header"
    >
      <a href="#">
        <img
          className="header-icon"
          src="./assets/imgs/Maestro-Logo-R.png"
          alt="MaestroBoard Logo"
        ></img>
      </a>
      <Row>
        <Col>
          <Navbar.Brand href="#home" className="header-title d-flex">
            MaestroBoard
            <small className="header-small-text">
              buy. sell. trade.connect. |{"  "}
              <span className="header-muse-small">
                {" "}
                Just chase your <span> 
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
      </Row>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav header-menu-center">
        <Nav className="mr-auto"></Nav>
        <Nav className="header-container header-menu-center">
          <Nav.Link href="#" className="header-items">
            Community Board
          </Nav.Link>
          <Nav.Link href="#" className="header-items">
            News
          </Nav.Link>
          <Nav.Link href="#" className="header-items">
            Forum
          </Nav.Link>
          <Nav.Link href="#" className="header-items">
            My Account
          </Nav.Link>
          <Nav.Link eventKey={2} href="#memes" className="header-items">
            Log in
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
