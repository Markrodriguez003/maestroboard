import React from "react";
// import "./css/SignUpForm.css";
import "./css/ReplyForm.css";
// import { PersonCircle } from "react-bootstrap-icons"; // Importing Bootstrap Icon Components

import { InputGroup, FormControl } from "react-bootstrap";
// import Header from "./Header";
// import Footer from "./Footer";

const accountLogo = "";
function ReplyForm() {
  return (
    <div>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1"><span className="font-weight-bold">Title:</span></InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder=""
          aria-label=""
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text><span className="font-weight-bold">Message:</span></InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl as="textarea" rows="6" aria-label="With textarea" />
      </InputGroup>

      <InputGroup className="mb-3 mt-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1"><span className="font-weight-bold">Counter-offer:</span></InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder=""
          aria-label=""
          aria-describedby="basic-addon1"
        />
      </InputGroup>
    </div>
  );
}

export default ReplyForm;
