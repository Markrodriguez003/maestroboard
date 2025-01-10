
// COMPONENTS
import { useState } from "react";
import { Row, Col, Form, Button, Container } from "react-bootstrap";

// LIBRARIES
import axios from "axios";

// ASSETS
import { PersonFillLock } from "react-bootstrap-icons";

// CSS
import "../css/Login.css";

// !
// !     password: "981249824",
// !    email: "amsongo22@gmail.com",

function Login(props) {

  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  // Makes API Fetch request to pass and check status to see is user credentials are valid.
  async function LOGIN_USER_AUTH(userChk) {
    // console.log(`INSIDE API POST REQUEST:::: ${JSON.stringify(userChk)}`)
    try {
      const response = await axios.post('http://localhost:3005/api/login',
        { email: userChk.email, password: userChk.password });
      console.log(`RESPONSE::: ${JSON.stringify(response.data.crendentials)}`);
      setErrors(response.data.crendentials);


    } catch (error) {
      console.error('Error logging in:', error);
      // setMessage('An error occurred');
    }


    // API POST request

    // await axios
    //   .get("http://localhost:3005/api/login")
    //   .then((response) => {
    //     console.log(`USERS::::${JSON.stringify(response.data)}`)
    //   })
    //   .catch((err) => console.log(`-->${err}`));
  }


  const setField = (field, value) => {
    console.log(`${field}:::${value}`);
    setForm({
      ...form,
      [field]: value
    })
  }


  // Submit Button function
  function formSubmit(e) {
    e.preventDefault();
    console.log(`Form:: ${JSON.stringify(form)}`);
    LOGIN_USER_AUTH(form);
  }

  return (
    <Container className="col-11 col-lg-5 col-md-7 p-1 rounded-4" style={{ backgroundColor: "rgba(0,0,0,0.7)" }}>
      <Row className="text-center mx-auto">
        <Col className="mt-3">
          <PersonFillLock style={{ color: "white", fontSize: "70px", }} />
          <h1 className="text-center" style={{ color: "white" }}>
            Log in
          </h1>

          <h1 style={{ color: "red" }}>

            {setForm === undefined ? "Nothing!"
              : `Email: ${setForm.email} - Password: ${setForm.password}`

            }

          </h1>
        </Col>
      </Row>
      <Form action=""
        onSubmit={formSubmit}
        className="w-75 mx-auto" style={{ color: "white" }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email"
            // onChange={(e) =>
            //   setUserAuthInfo(
            //     ...userAuthInfo,
            //     userAuthInfo.email = e.target.value
            //   )
            // }
            onChange={(e) => setField('email', e.target.value)}

          // value={userAuthInfo.email}
          />
          <Form.Text className="text-light">
            Don't share your credentials with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password"
            // onChange={(e) =>
            //   setUserAuthInfo(
            //     ...userAuthInfo,
            //     userAuthInfo.password = e.target.value
            //   )
            // }
            onChange={(e) => setField('password', e.target.value)}
          // value={userAuthInfo.password} 
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button type="submit" onSubmit={formSubmit}>
          Submit
        </Button>
      </Form>
    </Container >

  );
}

export default Login;
