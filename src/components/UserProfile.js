import React from "react";
import "./css/UserProfile.css";
import { Key } from "react-bootstrap-icons"; // Importing Bootstrap Icon Components
import Header from "./Header"
import Footer from "./Footer"
 
import UserAccountDetailsPanel from "./UserAccountDetailsPanel"
import UserBoard from "./UserBoard"
import { Form, Button, Row, Col } from "react-bootstrap";
 
function UserProfile() {
  return (
    <div className="UserProfile-main">
      <Header />
      {/* <UserBoard /> */}
      <UserAccountDetailsPanel />
      <Footer />
    </div >
  );
}

export default UserProfile;

