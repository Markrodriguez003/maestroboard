
// REACT
import { useState, useEffect } from "react";

// COMPONENTS
import { Nav, Navbar, Container } from "react-bootstrap";

// LIBRARY
import axios from "axios";

// ASSETS
import { PersonFillLock, Newspaper, PatchQuestionFill, PinAngleFill, CardChecklist } from "react-bootstrap-icons";
import MainLogo from "./MainLogo";
import { SITE_COLORS } from "../css/site";

// CSS
import "../css/Header.css";


/*----------------------------------------------------------------------------
|   ⚙️ Use: page header nav bar 
|   
|   🔧 Todo:
|
|   📦 Returns: JSX component
*----------------------------------------------------------------------------*/


// TOGGLES IF USER IS SIGNED IN. EITHER DISPLAY SIGN IN OR SIGNED IN NAV LINKS / ICONS

function Header() {


  // HOLDS TRIGGER FOR AUTHENTICATED USER
  const [isAuthenticatedUser, setIsAuthenticatedUser] = useState(false);

  // GRABBING SESSION MEMORY TO CHECK TO SEE IF USER IS SIGNED IN
  // VIA TOKEN DATA
  useEffect(() => {
    function getSessionToken() {
      const tokenString = sessionStorage.getItem('token');
      const userToken = JSON.parse(tokenString);
      return userToken;
    };

    async function authenticateUser() {
      const token = getSessionToken();

      if (!token || token === null) {
        setIsAuthenticatedUser(false);
        return;
      }

      const config = {
        headers: {
          'Authorization': `Bearer ${token}`,
          "Data": "Custom-Data"
        }
      }

      await axios
        .get("http://localhost:3005/api/auth", config)
        .then((response) => {
          setIsAuthenticatedUser(true);

        })
        .catch((err) => {
          setIsAuthenticatedUser(false);
          console.log(`Error verfiying user! --> ${err}`)

        });
    }

    if (!isAuthenticatedUser) {
      authenticateUser();
    }
  }, [])

  // useEffect(() => {
  //   console.log(`Is user logged in?: ${isAuthenticatedUser}`)
  //   // if (isAuthenticatedUser) { window.location.reload(); }

  // }, [isAuthenticatedUser])

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
            <Nav.Link eventKey={2} href={isAuthenticatedUser ? "/dashboard" : "/login"}>
              <PersonFillLock style={{ verticalAlign: "center", paddingBottom: "5px", fontSize: "20px" }} />
              {isAuthenticatedUser ? "Admin Dashboard" : "Admin Login"}
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar >


  );
}

export default Header;
