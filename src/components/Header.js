import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import "./css/Header.css";
import LoggedInHeader from "./LoggedInHeader";
import GuestHeader from "./GuestHeader";
import { Nav, Navbar, Row, Col, NavDropdown } from "react-bootstrap";
// import {Link} from "react-router-dom" // Wrap it around li or nav elements to link to specific pages
// coookies
function Header(prop) {
  let logged_In_Auth = -1;
  if (logged_In_Auth === 1) {
    return <LoggedInHeader />;
  } else {
    return <GuestHeader />;
  }
}

export default withRouter(Header);
