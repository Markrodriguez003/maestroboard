import React from "react";
import "./css/SignUpForm.css";
import { PersonCircle } from "react-bootstrap-icons"; // Importing Bootstrap Icon Components

import { Form, Button, Row, Col } from "react-bootstrap";

// <Navbar fixed="bottom" />
function SignUpForm() {
  return (
    <div className="sign-up-container">
      <section className="cover" className="min-vh-100">
        <div className="cover-caption">
          <div className="container">
            <div className="row text-white formContainer">
              <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-2">
                <div className="create-acct-smiley"><PersonCircle /></div>
                <h1 className=" text-truncate">Create a new account</h1>
                <div className="">
                  <form action="" className="justify-content-center">
                    <div className="form-group">
                      <Row>
                        <Col>
                          <label className="sr-only" />
                          First Name
                          <input
                            type="text"
                            className="form-control"
                            placeholder="@Username123"
                          />
                        </Col>
                        <Col>
                          <label className="sr-only" />
                          Last Name
                          <input
                            type="text"
                            className="form-control"
                            placeholder="@Username123"
                          />
                        </Col>
                      </Row>
                      <label className="sr-only" />
                      Address 1
                      <input
                        type="text"
                        className="form-control"
                        placeholder="@Username123"
                      />
                      <label className="sr-only" />
                      Address 2
                      <input
                        type="text"
                        className="form-control"
                        placeholder="@Username123"
                      />
                      <Row>
                        <Col>
                          <label className="sr-only" />
                          Zipcode
                          <input
                            type="text"
                            className="form-control"
                            placeholder="@Username123"
                          />
                        </Col>
                        <Col>
                          <label className="sr-only" />
                          City
                          <input
                            type="text"
                            className="form-control"
                            placeholder="@Username123"
                          />
                        </Col>
                        <Col>
                          <label className="sr-only" />
                          Country
                          <input
                            type="text"
                            className="form-control"
                            placeholder="@Username123"
                          />
                        </Col>
                      </Row>

                      <label className="sr-only" />
                      Username
                      <input
                        type="text"
                        className="form-control"
                        placeholder="@Username123"
                      />
                      <label className="sr-only" />
                      Password
                      <input
                        type="password"
                        className="form-control"
                        placeholder="@Username123"
                      />
                        Confirm  Password
                      <input
                        type="password"
                        className="form-control"
                        placeholder="@Username123"
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn btn-info btn-lg login-btn"
                    >
                      Create Account
                    </button>
                  </form>
                  <small>
                    <a href="#">Need help?</a>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignUpForm;

// OLD FORM

{
  /* <div className="signup-form-container justify-content-center">
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>

          <Form.Group controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control placeholder="Apartment, studio, or floor" />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control as="select" defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form.Row>

          <Form.Group id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button variant="info" type="submit">
            Submit
  </Button>
        </Form>
      </div> */
}
