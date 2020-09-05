import React from "react";
import "./css/Login.css";
import { Key } from "react-bootstrap-icons"; // Importing Bootstrap Icon Components
import Header from "./Header"
import Footer from "./Footer"
import { Form, Button, Row, Col } from "react-bootstrap";
{/* <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-key" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z" />
                    <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                  </svg>  */}

// <Navbar fixed="bottom" />
function Login() {
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
