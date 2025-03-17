// REACT
import { useState } from "react";

// COMPONENTS
import { Row, Col, Stack, Button, Form } from "react-bootstrap";

// ASSETS
import { PersonCircle } from "react-bootstrap-icons"

// THEMES & CSS
import "./css/SignupForm.css";
import { SITE_COLORS } from "./css/site";

function SignUpForm() {
  let [userInfo, setUserInfo] = useState({
  })

  // Function that creates new user via fetch POST request
  // async function CREATE_NEW_USER(newUser) {
  //   fetch('/api/createuser', {
  //     method: 'post',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     },
  //     body: JSON.stringify(newUser)

  //   })
  //     .then((res) => { return res })
  //     .then((data) => { console.log("data:" + JSON.stringify(data)) })
  //     .catch(err => { console.log("An error has occurred:::: " + err) })
  // }




  function formAccSubmit(e) {
    e.preventDefault();
    console.log(userInfo);
    // CREATE_NEW_USER(userInfo);
  }

  return (

    <>

      <div className="p-4 sign-up-container mx-auto text-light mt-4 mb-5 shadow-lg"
        style={{ backgroundColor: SITE_COLORS.main }} >
        <Stack direction="vertical">
          <PersonCircle className="mx-auto" size={"70px"} />
          <h1 className="display-4 text-truncatee text-center">Create a new account</h1>
        </Stack>

        {/* FORM */}
        <Form action="" onSubmit={formAccSubmit} className="justify-content-center">
          <Row>
            <Col>
              <Form.Group className="mb-1" controlId="signUpForm">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter First Name"
                  onChange={e => setUserInfo((prev) => ({
                    ...prev,
                    ["firstName"]: e.target.value
                  }))} />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-1" controlId="signUpForm">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Last Name"
                  onChange={e => setUserInfo((prev) => ({
                    ...prev,
                    ["lastName"]: e.target.value
                  }))} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-1" controlId="signUpForm">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" placeholder="Enter Phone Number"
                  onChange={e => setUserInfo((prev) => ({
                    ...prev,
                    ["phone"]: e.target.value
                  }))} />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-1" controlId="signUpForm">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter Email"
                  onChange={e => setUserInfo((prev) => ({
                    ...prev,
                    ["email"]: e.target.value
                  }))} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-1" controlId="signUpForm">
                <Form.Label>Address 1</Form.Label>
                <Form.Control type="text" placeholder="Enter Address 1"
                  onChange={e => setUserInfo((prev) => ({
                    ...prev,
                    ["addressFirst"]: e.target.value
                  }))} />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-1" controlId="signUpForm">
                <Form.Label>Address 2</Form.Label>
                <Form.Control type="text" placeholder="Enter Address 2 (If Needed)"
                  onChange={e => setUserInfo((prev) => ({
                    ...prev,
                    ["addressSecondary"]: e.target.value
                  }))} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-1 mx-auto" controlId="signUpForm">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter Username"
                  onChange={e => setUserInfo((prev) => ({
                    ...prev,
                    ["username"]: e.target.value
                  }))} />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group className="mb-1" controlId="signUpForm">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter Password"
                  onChange={e => setUserInfo((prev) => ({
                    ...prev,
                    ["password"]: e.target.value
                  }))} />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-1" controlId="signUpForm">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Re-enter Password" />
              </Form.Group>
            </Col>
          </Row>


          <Form.Check
            className="mt-3"
            type="switch"
            id="newsletter-switch"
            label="Sign up to newsletter?"
            onChange={e => setUserInfo((prev) => ({
              ...prev,
              ["newsletter"]: e.target.checked
            }))}
          />
          <Stack direction="horizontal" className="gap-2 mt-3">
            <Button
              type="submit"
              size="lg"
            >
              Create Account
            </Button>
            <a href="#" >Need Help?</a>
          </Stack>
        </Form>
        <br />
        <br />
      </div >

    </>

  );
}

export default SignUpForm;
