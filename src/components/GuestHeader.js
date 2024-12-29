import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
// import "./css/Header.css";
import { Nav, Navbar, Row, Col, NavDropdown } from "react-bootstrap";
// import {Link} from "react-router-dom" // Wrap it around li or nav elements to link to specific pages

function GuestHeader(prop) {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="main-header"
      >
        <a href="/myprofile">
          <img
            className="header-icon"
            src="./assets/imgs/Maestro-Logo-R.png"
            alt="MaestroBoard Logo"
          ></img>
        </a>
        <Row>
          <Col>
            <Navbar.Brand href="/home" className="header-title d-flex">
              MaestroBoard
              <small className="header-small-text">
                buy. sell. trade. connect. |{"  "}
                <span className="header-muse-small">
                  {" "}
                  Chase your{" "}
                  <span>
                    <a
                      href="https://en.wikipedia.org/wiki/Euterpe#:~:text=Euterpe%20(%2Fju%CB%90%CB%88t,named%20muse%20of%20lyric%20poetry."
                      className="muse-anchor"
                    >
                      muse
                    </a>
                  </span>
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
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default withRouter(GuestHeader);
