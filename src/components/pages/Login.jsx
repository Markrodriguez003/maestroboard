
// COMPONENTS
import { useState, useContext, useRef } from "react";
import { Row, Col, Form, Button, Container, Spinner, Toast, Stack } from "react-bootstrap";

// LIBRARIES
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";

// CONTEXT
import { isLoggedInContext } from "../context/LoggedInContext";

// ASSETS
import { PersonFillLock } from "react-bootstrap-icons";

// SITE THEMES +  DESIGN
import "../css/Login.css";
import { SITE_COLORS } from "../css/site";

/*-----------------------------------------------------------------------------------
|   ⚙️ Use: Login page for users/admins to sign in (using session storage to)
|       hold generated JWT logged in tokens
| 
|   🔧 Todo: Add dashboard for general users | change header icon for login/logged in 
|
|   📦 Returns: JSX component 
*------------------------------------------------------------------------------------*/

function Login(props) {


  // REF FOR recaptcha
  const recaptchaRef = useRef(null);

  // Used to navigate to another page
  const navigate = useNavigate();

  // Used to set/get user logged in status 
  const isLoggedIn = useContext(isLoggedInContext);

  // Sets up login authentication tokens to session storage
  function setSessionToken(userToken, userIsLoggedIn) {
    sessionStorage.setItem('token', JSON.stringify(userToken));
    sessionStorage.setItem('isLoggedIn', JSON.stringify(userIsLoggedIn));
  }

  // Sets field values to form object )
  const [form, setForm] = useState({});

  // Handles button spinner: submit (true), initial(false),
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
      const gToken = recaptchaRef.current.getValue();
      const config = {
        headers: {
          'g-captcha': `${gToken}`,
        }
      }

      // const response = await axios.post('http://localhost:3005/api/login',
      // const response = await axios.post('http://localhost:3005/api/auth/login',
      const response = await axios.post(`${import.meta.env.VITE_SERVER_API_URL}/api/auth/login`,
        { email: userChk.email, password: userChk.password, captchaToken: gToken }, config);
      setFormActionResults(prev => (
        {
          ...prev,
          loading: true,
        }
      ));
      if (response.status === 200) {
        setFormActionResults(prev => (
          {
            ...prev,
            loading: false,
            popup: true,
            status: "successful"
          }
        ));
        // sets logged in status context 
        isLoggedIn.setStatus(true);
        recaptchaRef.current.reset();
        // sets user login token to session storage
        setSessionToken(response.data.token, true);
        navigate('/dashboard');
        window.location.reload();

      }

    } catch (error) {
      isLoggedIn.setStatus(false);
      setSessionToken(null, false);
      setFormActionResults(prev => (
        {
          ...prev,
          loading: false,
          popup: true,
          errors: true,
          status: "failure"
        }
      ));
      recaptchaRef.current.reset();
      console.error('Error logging in:', JSON.stringify(error));
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

    <>
      <Container
        className="col-11 col-lg-5 col-md-7 p-5 mt-4 pb-2 rounded-4 h-100 shadow-lg"
        style={{ backgroundColor: SITE_COLORS.main }}>
        <Stack direction="column" className="p-0 m-0">
          <PersonFillLock
            className="mx-auto"
            style={{ color: "white", fontSize: "75px", }} />
          <h1 className="text-center mb-3" style={{ color: "white" }}>
            Log in
          </h1>
          <Form action=""
            onSubmit={formSubmit}
            className="m-0 p-0" style={{ color: "white" }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email"
                onChange={(e) => setField('email', e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password"
                onChange={(e) => setField('password', e.target.value)}
              />
            </Form.Group>

            <div className="p-0 m-0 mb-3 w-100 gcaptcha-container">
              <ReCAPTCHA
                className="gCaptcha"
                ref={recaptchaRef}
                sitekey={import.meta.env.VITE_GOOGLE_CAPTCHA_SITE_KEY} theme="dark" />
            </div>

            <div className="d-grid" style={{ paddingTop: "-50px !important" }}>
              <Button
                value={"lg"}
                type="submit"
                className="text-center m-0 mb-5"
                onSubmit={formSubmit}
                disabled={formActionResults.loading}
              >
                {formActionResults.loading ? <Spinner /> : 'Sign-in'}
              </Button>
            </div>
          </Form>


          {/* LOGIN TOAST */}
          {formActionResults.status === "failure" ?
            <Toast show={formActionResults.popup} onClose={togglePopup} delay={3000} autohide className="mx-auto m-3" aria-controls="example-fade-text">
              <Toast.Header style={{ backgroundColor: "red", color: "white" }}>
                <strong className="me-auto">Invalid Credentials!</strong>
              </Toast.Header>
              <Toast.Body>Check your form fields & Make sure you verify with Google captcha! </Toast.Body>
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


        </Stack>
      </Container >
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />


    </>

  );
}

export default Login;
