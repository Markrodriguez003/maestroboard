
import { Nav, Navbar, Row, Col, NavDropdown } from "react-bootstrap";
import profileImg from "../assets/imgs/account/blank-profile-picture-973460_640.png";

function LoggedInHeader(prop) {
  let test = "volta22";
  return (
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
          <NavDropdown
            title={test}
            id="nav-dropdown"
            className="header-container header-menu-center"
          >
            <NavDropdown.Item
              eventKey="4.1"
              className="header-container header-menu-center"
            >
              Account Profile
            </NavDropdown.Item>
            <NavDropdown.Item
              eventKey="4.2"
              className="header-container header-menu-center"
            >
              Settings
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item
              eventKey="4.4"
              className="header-container header-menu-center text-danger"
            >
              Log out
            </NavDropdown.Item>
          </NavDropdown>
          <img src={profileImg} className="header-profile-image" />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default LoggedInHeader;
