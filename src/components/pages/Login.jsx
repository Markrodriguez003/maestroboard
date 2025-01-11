
// COMPONENTS
import { useState } from "react";
import { Row, Col, Form, Button, Container, Spinner, Toast } from "react-bootstrap";

// LIBRARIES
import axios from "axios";

// ASSETS
import { PersonFillLock } from "react-bootstrap-icons";

// CSS
import "../css/Login.css";

function Login(props) {

  // Sets field values to form object )
  const [form, setForm] = useState({});

  // Handles button spinner: submit (true), initial(false),
  // const [formLoading, setFormLoading] = useState(false);
  const [formActionResults, setFormActionResults] = useState({
    loading: false,
    errors: false,
    popup: false,
    status: "null"
  });

  // Handles form error handling (UX popups | false nothing, true | popup)
  const togglePopup = () => setFormActionResults(prev => (
    {
      ...prev,
      loading: false,
      popup: !prev.popup
    }
  ));;

  // Makes API Fetch request to pass and check status to see is user credentials are valid.
  async function LOGIN_USER_AUTH(userChk) {
    try {
      const response = await axios.post('http://localhost:3005/api/login',
        { email: userChk.email, password: userChk.password });
      setFormActionResults(prev => (
        {
          ...prev,
          loading: false,
          popup: true,
          status: "successful"
        }
      ));
      console.log(`Inside response message! --> ${JSON.stringify(response.data.message)}`)
      console.log(`Inside response message! -- > ${JSON.stringify(response.data.status)} `)
    } catch (error) {
      setFormActionResults(prev => (
        {
          ...prev,
          loading: false,
          popup: true,
          errors: true,
          status: "failure"
        }
      ));
      console.error('Error logging in:', error.status);
    }
  }

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value
    })
  }

  // Submit Button function
  function formSubmit(e) {
    e.preventDefault();
    LOGIN_USER_AUTH(form);
  }

  return (


    <Container className="col-11 col-lg-5 col-md-7 p-1 mt-5 rounded-4" style={{ backgroundColor: "rgba(0,0,0,0.7)", transition: "0.5s ease-in-out !important" }}>
      <Row className="text-center mx-auto" >
        <Col className="mt-3" >
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
            onChange={(e) => setField('email', e.target.value)}
          />
          <Form.Text className="text-light">
            Don't share your credentials with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password"
            onChange={(e) => setField('password', e.target.value)}
          />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button
          type="submit"
          onSubmit={formSubmit}
          disabled={formActionResults.loading}
        // onClick={!formLoading ? handleClick : null}
        >
          {formActionResults.loading ? <Spinner /> : 'Sign-in'}
        </Button>
      </Form>

      {/* LOGIN TOAST */}
      {formActionResults.status === "failure" ?
        <Toast show={formActionResults.popup} onClose={togglePopup} delay={3000} autohide className="mx-auto m-3" aria-controls="example-fade-text">
          <Toast.Header style={{ backgroundColor: "red", color: "white" }}>
            <strong className="me-auto">Invalid Credentials!</strong>
          </Toast.Header>
          <Toast.Body>Check your form fields!</Toast.Body>
        </Toast>
        :
        formActionResults.status === "successful" ?

          <Toast show={formActionResults.popup} onClose={togglePopup} delay={3000} autohide className="mx-auto m-3" aria-controls="example-fade-text" >
            <Toast.Header style={{ backgroundColor: "green", color: "white" }}>
              <strong className="me-auto">Login in Successful!</strong>
            </Toast.Header>
            <Toast.Body>Welcome!</Toast.Body>
          </Toast>
          :
          <></>
      }


    </Container >


  );
}

export default Login;
