import React from "react";
import "./css/Login.css";
// import { ArrowUpCircle } from "react-bootstrap-icons"; // Importing Bootstrap Icon Components

import { Form, Button, Row, Col } from "react-bootstrap";

// <Navbar fixed="bottom" />
function Login() {
  return (
    <div className="login-container">
      <section className="cover" className="min-vh-100">
        <div className="cover-caption">
          <div className="container">
            <div className="row text-white">
              <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
                {/* <svg width="5em" height="5em" viewBox="0 0 16 16" class="bi bi-person-check text-center mx-auto" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10zm4.854-7.85a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                </svg> */}
                <h1 className="display-4 py-2 text-truncate login-title">Log in</h1>
                <div className="px-2">
                  <form action="" className="justify-content-center">
                    <div className="form-group">
                      <label className="sr-only" />Username
                                <input type="text" className="form-control" placeholder="@Username123" />
                    </div>
                    <div className="form-group">
                      <label className="sr-only" />Email
                                <input type="password" className="form-control" placeholder="!Password" />
                    </div>
                    <button type="submit" className="btn btn-info btn-lg login-btn">Log in</button>
                  </form>
                  <small><a href="#">Need help?</a></small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div >
  );
}

export default Login;


// OLD FORM



{/* <div className="signup-form-container justify-content-center">
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
      </div> */}