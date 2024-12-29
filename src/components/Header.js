import { withRouter } from "react-router-dom";
import "./css/Header.css";

import GuestHeader from "./GuestHeader";
import { Nav, Navbar, Row, Col, NavDropdown } from "react-bootstrap";
// import {Link} from "react-router-dom" // Wrap it around li or nav elements to link to specific pages
// coookies
function Header(prop) {
  return <GuestHeader />;
}

export default withRouter(Header);
