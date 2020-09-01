import React from "react";
import "./css/MyProfile.css";
import Header from "./Header"
import Footer from "./Footer"
 
import UserAccountDetailsPanel from "./UserAccountDetailsPanel"
 
function MyProfile() {
  return (
    <div className="UserProfile-main">
      <Header />
      <UserAccountDetailsPanel />
      <Footer />
    </div >
  );
}

export default MyProfile;

