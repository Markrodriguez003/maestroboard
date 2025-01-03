


import { Nav, Navbar, Row, Col } from "react-bootstrap";
import siteLogo from "../assets/imgs/logo/Maestro-Logo-R.png";

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
            src={siteLogo}
            alt="MaestroBoard Logo"
          />
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
                    {/* <a
                      href="https://en.wikipedia.org/wiki/Euterpe#:~:text=Euterpe%20(%2Fju%CB%90%CB%88t,named%20muse%20of%20lyric%20poetry."
                      className="muse-anchor"
                    >
                      muse
                    </a> */}
                  </span>
                  .{" "}
                </span>
              </small>
            </Navbar.Brand>
          </Col>
        </Row>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav header-menu-center">
          <Nav className="pl-5"></Nav>
          <Nav className="pl-5 header-container header-menu-center">
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

export default GuestHeader;
