import React, { useEffect, useState } from "react";
import "../components/css/SignUpForm.css";
import SuccessfullyCreatedUserModal from "./SuccessfullyCreatedUserModal"
// import { PersonCircle } from "react-bootstrap-icons"; // Importing Bootstrap Icon Components

import { Row, Col, Button } from "react-bootstrap";
import Header from "./Header"
import Footer from "./Footer"


const accountLogo = ""
function SignUpForm() {


  let [userInfo, setUserInfo] = useState({
    // posts: [ 1, 2, 3, 4 ],
    // address1: "",
    // address2: "",
    // zip: "",
    // city: "",
    // state: "",
    // username: "",
    // password: ""
  })

  // let [acctUserName, setAcctUserName] = useState('')
  // let [acctUserPass, setAcctUserPass] = useState('')


  // Function that creates new user via fetch POST request
  async function CREATE_NEW_USER(newUser) {
    fetch('/api/createuser', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(newUser)

    })
      .then((res) => { return res })
      .then((data) => { console.log("data:" + JSON.stringify(data)) })
      .catch(err => { console.log("An error has occurred:::: " + err) })
  }

  function formAccSubmit(e) {
    e.preventDefault();
    console.log(userInfo);
    CREATE_NEW_USER(userInfo);
    // console.log(userInfo);
    // console.log(acctUserName);
    // console.log(acctUserPass);
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
                  <form action="" onSubmit={formAccSubmit} className="justify-content-center">
                    <div className="form-group">
                      <Row>
                        <Col>
                          <label className="sr-only" />
                    First Name
                    <input
                            type="text"
                            className="form-control f-field"
                            placeholder="Enter Your First Name"
                            onChange={e => setUserInfo(userInfo, userInfo["firstname"] = e.target.value)}
                            value={userInfo.fName}
                          />
                        </Col>
                        <Col>
                          <label className="sr-only" />
                    Last Name
                    <input
                            type="text"
                            className="form-control f-field"
                            placeholder="Enter Your Last Name"
                            onChange={e => setUserInfo(userInfo, userInfo["lastname"] = e.target.value)}
                            value={userInfo.lname}
                          />
                        </Col>
                      </Row>
                      <label className="sr-only" />
                Contact Number
                <input
                        type="text"
                        className="form-control f-field"
                        placeholder="Enter Your Contact Number"
                        onChange={e => setUserInfo(userInfo, userInfo["number"] = e.target.value)}
                        value={userInfo.number}
                      />
                      <label className="sr-only" />
                      <label className="sr-only" />
                Address 1
                <input
                        type="text"
                        className="form-control f-field"
                        placeholder="Enter Your Address"
                        onChange={e => setUserInfo(userInfo, userInfo["address1"] = e.target.value)}
                        value={userInfo.address1}
                      />
                      <label className="sr-only" />
                Address 2
                <input
                        type="text"
                        className="form-control f-field"
                        placeholder="Enter Your Enter Your Address (Cont.)"
                        onChange={e => setUserInfo(userInfo, userInfo["address2"] = e.target.value)}
                        value={userInfo.address2}
                      />
                      <Row>
                        <Col>
                          <label className="sr-only" />
                    Zipcode
                    <input
                            type="text"
                            className="form-control f-field"
                            placeholder="Enter Your Zip Code"
                            onChange={e => setUserInfo(userInfo, userInfo["zip"] = e.target.value)}
                            value={userInfo.zip}
                          />
                        </Col>
                        <Col>
                          <label className="sr-only" />
                    City
                    <input
                            type="text"
                            className="form-control f-field"
                            placeholder="Enter Your City"
                            onChange={e => setUserInfo(userInfo, userInfo["city"] = e.target.value)}
                            value={userInfo.city}
                          />
                        </Col>
                        <Col>
                          <label className="sr-only" />
                    State
                    <input
                            type="text"
                            className="form-control f-field"
                            placeholder="Enter Your State"
                            onChange={e => setUserInfo(userInfo, userInfo["state"] = e.target.value)}
                            value={userInfo.state}
                          />
                        </Col>
                      </Row>

                      <label className="sr-only" />
                Username
                <input
                        type="text"
                        className="form-control f-field"
                        placeholder="Please select a username"
                        onChange={e => setUserInfo(userInfo, userInfo["username"] = e.target.value)}
                        value={userInfo.username}
                      />
                      <label className="sr-only" />
                Password
                <input
                        type="password"
                        className="form-control f-field"
                        placeholder="Enter a strongly typed password"
                        onChange={e => setUserInfo(userInfo, userInfo["password"] = e.target.value)}
                        value={userInfo.password}
                      />
                  Confirm  Password
                <input
                        type="password"
                        className="form-control f-field"
                        placeholder="Re-Enter a strongly typed password"
                      />
                    </div>

                    <SuccessfullyCreatedUserModal />


                    {/* <button
                      type="submit"
                      className="btn btn-info btn-lg login-btn"
                    >
                      Create Account
              </button> */}

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
