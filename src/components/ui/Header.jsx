
// COMPONENTS
import { Nav, Navbar, Container } from "react-bootstrap";
import { PersonFillLock, Newspaper, PatchQuestionFill, PinAngleFill, CardChecklist } from "react-bootstrap-icons";
import MainLogo from "./MainLogo";

// ASSETS
import { SITE_COLORS } from "../css/site";

// CSS
import "../css/Header.css";

function Header() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" className="bg-body-tertiary p-0 m-0 d-flex  " >
      <Container style={{ backgroundColor: SITE_COLORS.main }} className="d-flex p-2 " fluid>
        <Navbar.Brand href="#home" className="pb-3">  <MainLogo /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-xxl-end justify-content-xl-end justify-content-lg-start justify-content-md-start justify-content-sm-start justify-content-xs-start  " >
          <Nav className="">
            <Nav.Link href="/board" className="header-list-item " >
              <PinAngleFill style={{ verticalAlign: "center", paddingBottom: "5px", fontSize: "20px" }} /> {" "}
              Community Board
            </Nav.Link>
            <Nav.Link href="/news" className="header-list-item" >
              <Newspaper style={{ verticalAlign: "center", paddingBottom: "5px", fontSize: "20px" }} /> {" "} News
            </Nav.Link>
            <Nav.Link href="/forum" className="header-list-item">
              <CardChecklist style={{ verticalAlign: "center", paddingBottom: "5px", fontSize: "20px" }} /> {" "}
              Forum
            </Nav.Link>
            <Nav.Link href="/about" className="header-list-item " >
              <PatchQuestionFill style={{ verticalAlign: "center", paddingBottom: "5px", fontSize: "20px" }} /> {" "}
              About
            </Nav.Link>
            <Nav.Link eventKey={2} href="/login" className="header-list-item">
              <PersonFillLock style={{ verticalAlign: "center", paddingBottom: "5px", fontSize: "20px" }} /> Admin Log in
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar >


  );
}

export default Header;
