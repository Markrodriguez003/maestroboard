import React from "react";
import "./css/SignupForm.css";
// import { ArrowUpCircle } from "react-bootstrap-icons"; // Importing Bootstrap Icon Components

import { Form, Button, Row, Col } from "react-bootstrap";

// <Navbar fixed="bottom" />
function SignupForm() {
  return (
    <div className="signup-form-container">
      <section className="cover" className="min-vh-100">
        <div className="cover-caption">
          <div className="container">
            <div className="row text-white">
              <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
                <h1 className="display-4 py-2 text-truncate">Log in</h1>
                <div className="px-2">
                  <form action="" className="justify-content-center">
                    <div className="form-group">
                      <label className="sr-only" />Username
                                <input type="text" className="form-control" placeholder="Jane Doe" />
                    </div>
                    <div className="form-group">
                      <label className="sr-only" />Email
                                <input type="text" className="form-control" placeholder="jane.doe@example.com" />
                    </div>
                    <button type="submit" className="btn btn-info btn-lg login-btn">Sign in</button>
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

export default SignupForm;

