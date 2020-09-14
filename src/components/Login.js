import React, { useEffect, useState } from "react";
import "./css/Login.css";
import Header from "./Header"
import Footer from "./Footer"
import { Row, Col } from "react-bootstrap";


function Login() {

  let [userAuthInfo, setUserAuthInfo] = useState({});



  async function LOGIN_USER_AUTH(userChk) {
    fetch('/api/login', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(userChk)

    })
        .then((res) => { return res })
        // .then((data) => { console.log("data:" + data) })
        .catch(err => { console.log("An error has occurred:::: " + err) })
}


  function formSubmit(e) {
    e.preventDefault();
    // console.log(userAuthInfo);
    LOGIN_USER_AUTH(userAuthInfo)



  }

  return (
    <div className="login-container">
      <Header />
      <section className="cover" className="min-vh-100">
        <div className="cover-caption">
          <div className="container">
            <div className="row text-white">
              <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">

                <h1 className="display-4 py-2 text-truncate login-title">
                  Log in</h1>
                <div className="px-2">
                  <form action="" onSubmit={formSubmit} className="justify-content-center">
                    <div className="form-group">
                      <label className="sr-only" />Username
                                <input type="text" className="form-control" placeholder="@Username123"
                            onChange={e => setUserAuthInfo(userAuthInfo, userAuthInfo["username"] = e.target.value)}
                            value={userAuthInfo.username} />

                    </div>
                    <div className="form-group">
                      <label className="sr-only" />Email
                                <input type="password" className="form-control" placeholder="!Password"
                        onChange={e => setUserAuthInfo(userAuthInfo, userAuthInfo["password"] = e.target.value)}
                        value={userAuthInfo.password} />

                    </div>
                    <button type="submit" className="btn btn-info btn-lg login-btn">Log in</button>
                  </form>
                  <Row>
                    <Col>
                      <small><a href="#">Need help?</a></small>
                    </Col>
                    <Col>
                      <small><a href="/signup">Create New Account</a></small>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div >
  );
}

export default Login;
