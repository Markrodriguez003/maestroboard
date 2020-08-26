import React from "react";
import "./Header.css";
import { Nav, Navbar, Row, Col, Container } from "react-bootstrap";

function Header() {
  return (
    // xs, sm, md, lg, and x
    <div className="main-header">
      <Container fluid>
        <header>
          <Row>
            <Col xs sm md lg={1}>
              <a href="#">
                <img
                  className="header-icon"
                  src="./assets/imgs/MaestroBoard-Logo-White.png"
                  alt="MaestroBoard Logo"
                  className="header-icon"
                ></img>
              </a>
            </Col>
            <Col xs sm md lg={6}>
              <a href="#" w to>
                <h1 className="header-title">MAESTROBOARD</h1>
                <small className="header-small">
                  buy. sell. trade.connect. | Just chase your muse.
                </small>
              </a>
            </Col>
            <Col xs sm md lg={1}>
              <a href="#" className="header-options-a">
                Community Boards
              </a>
            </Col>
            <Col xs sm md lg={1}>
              <a href="#" className="header-options-a">
                Forums
              </a>
            </Col>
            <Col xs sm md lg={1}>
              <a href="#" className="header-options-a">
                My Profile
              </a>
            </Col>
            <Col xs sm md lg={1}>
              <a href="#" className="header-options-a">
                Log In
              </a>
            </Col>
            <Col xs sm md lg={1}>
              <a href="#" className="header-options-a">
                Sign up
              </a>
            </Col>
          </Row>
        </header>
      </Container>
    </div>
  );
}

export default Header;
