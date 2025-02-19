
// REACT
import { useState, useEffect, useContext } from "react";

// COMPONENTS
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";

// LIBRARY
import axios from "axios";

// CONTEXT
import { isLoggedInContext } from "../context/LoggedInContext";

// ASSETS
import { PersonFillLock, Newspaper, PatchQuestionFill, PinAngleFill, CardChecklist, LayoutSidebarReverse, DatabaseFill, DatabaseFillGear } from "react-bootstrap-icons";
import MainLogo from "./MainLogo";
import { SITE_COLORS } from "../css/site";

// CSS
import "../css/Header.css";
import { useFormState } from "react-hook-form";


/*----------------------------------------------------------------------------
|   ⚙️ Use: page header nav bar 
|   
|   🔧 Todo:
|
|   📦 Returns: JSX component
*----------------------------------------------------------------------------*/

function Header() {

  // GETS SESSION LOG IN STATUS
  let sessionLoginStatus = sessionStorage.getItem('isLoggedIn');



  // TRIGGERS HEADER ITEMS
  const [status, setStatus] = useState(JSON.parse(sessionLoginStatus));


  // useEffect(() => {
  //   // function setInitialSessionStatus() {
  //   //   let sessionLoginStatus = sessionStorage.getItem('isLoggedIn');
  //   //   console.log(`Start of Getting session login status---> ${sessionLoginStatus} `)
  //   //   setStatus(sessionLoginStatus);
  //   //   console.log(`Setting initial session login status---> ${status} `)
  //   // }

  //   // setInitialSessionStatus();

  //   console.log("?!!?!?!?!?!?!?!??!?!?!?!?!?!?")
  // }, []);




  // THIS WORKS!
  // useEffect(() => {
  //   console.log(`Status: ${status}`)
  // }, [status])

  // LISTENS TO CHANGES
  // useEffect(() => {
  //   function sessionListener() {
  //     let x = sessionStorage.getItem('isLoggedIn');
  //     console.log(`INITIAL STATUS --> ${x}`)
  //     console.log('The session has changed!');
  //   }

  //   window.addEventListener('storage', sessionListener)
  //   return () => window.removeEventListener('storage', sessionListener)
  // },)

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

            <Nav.Link href="/about" className="header-list-item " >
              About
            </Nav.Link>
            <NavDropdown title={status === true ? "Admin Dashboard" : "Admin Login"} id="navbarScrollingDropdown">
              <NavDropdown.Item href="#log-in-out" style={{ backgroundColor: "transparent !important", background: "transparent" }}>
                <Nav.Link eventKey={2} href={"/dashboard"} style={{ display: status === true ? "inline" : "none", backgroundColor: "transparent !important" }}>
                  <DatabaseFillGear style={{ verticalAlign: "center", paddingBottom: "5px", fontSize: "20px" }} />
                  Dashboard
                </Nav.Link>
                <Nav.Link eventKey={2} href={status === true ? "/log-out" : "/login"} style={{ backgroundColor: "transparent !important" }}>
                  <PersonFillLock style={{ verticalAlign: "center", paddingBottom: "5px", fontSize: "20px" }} />
                  {status === true ? "Log out" : "Log in"}
                </Nav.Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  );
}

export default Header;
