import React, { useState } from "react";
import yay from "./imgs/Confetti.gif"
// import "./css/SignUpForm.css";
// import { PersonCircle } from "react-bootstrap-icons"; // Importing Bootstrap Icon Components
 
function SuccessfullyCreatedUserForm() {

    return (
        <div>
            <img src={yay} />
            <h1 className="text-center">Nice!</h1>
            <p className="text-center">Now you can post your own listings, forum posts and send your own messages to any mastroboard users! </p>
        </div>
    );
}
export default SuccessfullyCreatedUserForm;


