import React, {useEffect, useState} from "react";
import "./css/SignupForm.css";
// import { PersonCircle } from "react-bootstrap-icons"; // Importing Bootstrap Icon Components

import { Row, Col } from "react-bootstrap";
import Header from "./Header"
import Footer from "./Footer"


const accountLogo = ""
function SignUpForm() {


  let [userInfo, setUserInfo] = useState({
    // fname: " " ",
    // lname: " ",
    // address1: " ",
    // address2: " ",
    // zip: " ",
    // city: " ",
    // country: " ",
    // phone: " ",
  })
  
  
  let [acctUserName, setAcctUserName] = useState('')
  let [acctUserPass, setAcctUserPass] = useState('')
  
  function formAccSubmit(e){
    e.preventDefault();
    console.log(userInfo);
    console.log(acctUserName);
    console.log(acctUserPass);

    // Make Post Call here


    // 
  
  }

  return (

    <div className="sign-up-container">
      <Header />
      <section className="cover" >
        <div className="cover-caption">
          <div className="container">
            <div className="row text-white formContainer">
              <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form form-main-container">
                <div className="create-acct-smiley mb-1"><svg width="5em" height="5em" viewBox="0 0 16 16" class="bi bi-person-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
                  <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  <path fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" />
                </svg></div>
                <h1 className=" display-4 py-2 text-truncatee signup-title">Create a new account</h1>
                <div className="">
                  <form action="" onSubmit ={formAccSubmit} className="justify-content-center">
                    <div className="form-group">
                      <Row>
                        <Col>
                          <label className="sr-only" />
                    First Name
                    <input
                            type="text"
                            className="form-control f-field"
                            placeholder="Enter Your First Name"
                            value={userInfo.fName } 
                            onChange={e => setUserInfo(userInfo, userInfo.fName = e.target.value) }
                          />
                        </Col>
                        <Col>
                          <label className="sr-only" />
                    Last Name
                    <input
                            type="text"
                            className="form-control f-field"
                            placeholder="Enter Your Last Name"
                            value={userInfo.lname } 
                            onChange={e => setUserInfo(userInfo, userInfo.lName = e.target.value) }
                          />
                        </Col>
                      </Row>
                      <label className="sr-only" />
                Contact Number
                <input
                        type="text"
                        className="form-control f-field" 
                        placeholder="Enter Your Contact Number"
                        value={userInfo.number } 
                        onChange={e => setUserInfo(userInfo, userInfo.number = e.target.value) }
                      />
                      <label className="sr-only" />
                      <label className="sr-only" />
                Address 1
                <input
                        type="text"
                        className="form-control f-field" 
                        placeholder="Enter Your Address"
                        value={userInfo.address1 } 
                        onChange={e => setUserInfo(userInfo, userInfo.address1 = e.target.value) }
                      />
                      <label className="sr-only" />
                Address 2
                <input
                        type="text"
                        className="form-control f-field"
                        placeholder="Enter Your Enter Your Address (Cont.)"
                        value={userInfo.address2 } 
                        onChange={e => setUserInfo(userInfo, userInfo.address2 = e.target.value) }
                      />
                      <Row>
                        <Col>
                          <label className="sr-only" />
                    Zipcode
                    <input
                            type="text"
                            className="form-control f-field"
                            placeholder="Enter Your Zip Code"
                            value={userInfo.zip } 
                            onChange={e => setUserInfo(userInfo, userInfo.zip = e.target.value) }
                          />
                        </Col>
                        <Col>
                          <label className="sr-only" />
                    City
                    <input
                            type="text"
                            className="form-control f-field"
                            placeholder="Enter Your City"
                            value={userInfo.city } 
                            onChange={e => setUserInfo(userInfo, userInfo.city = e.target.value) }
                          />
                        </Col>
                        <Col>
                          <label className="sr-only" />
                    State
                    <input
                            type="text"
                            className="form-control f-field"
                            placeholder="Enter Your State"
                            value={userInfo.state } 
                            onChange={e => setUserInfo(userInfo, userInfo.state = e.target.value) }
                          />
                        </Col>
                      </Row>

                      <label className="sr-only" />
                Username
                <input
                        type="text"
                        className="form-control f-field"
                        placeholder="Please select a username"
                        value={acctUserName } 
                        onChange={e => setAcctUserName(e.target.value) }
                      />
                      <label className="sr-only" />
                Password
                <input
                        type="password"
                        className="form-control f-field"
                        placeholder="Enter a strongly typed password"
                        value={acctUserPass } 
                        onChange={e => setAcctUserPass(e.target.value)}
                      />
                  Confirm  Password
                <input
                        type="password"
                        className="form-control f-field"
                        placeholder="Re-Enter a strongly typed password"
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn btn-info btn-lg login-btn"
                    >
                      Create Account
              </button>
                  </form>
                  <small >
                    <a href="#" ><span className="mb-4 pb-4">Need Help?</span></a>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
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



/*********************************************************** */
// OLD CODE AGAIN
{/* <div className="sign-up-container">
<section className="cover" className="min-vh-100">
  <div className="cover-caption">
    <div className="container">
      <div className="row text-white formContainer">
        <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form">
          <div className="create-acct-smiley mb-4"><PersonCircle /></div>
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
</div> */}