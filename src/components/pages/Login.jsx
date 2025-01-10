
// COMPONENTS
import { useState } from "react";
import { Row, Col, Form, Button, Container } from "react-bootstrap";

// ASSETS
import { PersonFillLock } from "react-bootstrap-icons";

// CSS
import "../css/Login.css";

function Login(props) {

  let [userAuthInfo, setUserAuthInfo] = useState({ email: "", password: "" });

  // Makes API Fetch request to pass and check status to see is user credentials are valid.
  async function LOGIN_USER_AUTH(userChk) {
    // API POST request
    let user_auth = await fetch("/api/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(userChk),
    })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log("An error has occurred:::: " + err);
      });
    // console.log("THE STATUS OF THE LOGIN PAGE IS :::::> " + JSON.stringify(status.status));
    if (user_auth.status === 201) {
      console.log("Redirecting. . .");
      // props.history.push("/");
    } else {
      console.log("Not working");
    }
  }

  // Submit Button function
  function formSubmit(e) {
    e.preventDefault();
    console.log(userAuthInfo);
    LOGIN_USER_AUTH(userAuthInfo);
  }

  return (
    <Container className="col-11 col-lg-5 col-md-7 p-1 rounded-4" style={{ backgroundColor: "rgba(0,0,0,0.7)" }}>
      <Row className="text-center mx-auto">
        <Col className="mt-3">
          <PersonFillLock style={{ color: "white", fontSize: "70px", }} />
          <h1 className="text-center" style={{ color: "white" }}>
            Log in
          </h1>
        </Col>
      </Row>
      <Form action=""
        onSubmit={formSubmit}
        className="w-75 mx-auto" style={{ color: "white" }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email"
            onChange={(e) =>
              setUserAuthInfo(
                ...userAuthInfo,
                userAuthInfo.email = e.target.value
              )
            }
            value={userAuthInfo.email}
          />
          <Form.Text className="text-light">
            Don't share your credentials with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password"
            onChange={(e) =>
              setUserAuthInfo(
                ...userAuthInfo,
                userAuthInfo.password = e.target.value
              )
            }
          // value={userAuthInfo.password} 
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button type="submit">
          Submit
        </Button>
      </Form>
    </Container >

  );
}

export default Login;
