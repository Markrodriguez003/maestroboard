import React from "react";
import "./css/SignUpForm.css";
import { PersonCircle } from "react-bootstrap-icons"; // Importing Bootstrap Icon Components

import { Form, Button, Row, Col, InputGroup, FormControl } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";

const accountLogo = "";
function ReplyForm() {
  return (
    <div>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">Title:</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder=""
          aria-label=""
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text>Message:</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl as="textarea" rows="8" aria-label="With textarea" />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">CounterOffer:</InputGroup.Text>
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
