import React from "react";
import "./Login.css";
const Login = () => {
  return (
    <div>
      
      <div class="container wrap ">
        <div class=" white-box">
          <div class="row main-row">
            <div class="col-md-7 ">
              <div class="form-group">
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Username"
                ></input>
              </div>
              <div class="form-group">
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Password"
                ></input>
                <a id="forgot-password" href="#">
                  forgot Password?
                </a>
              </div>

              <button
                type="button"
                class="btn btn-primary login-button m-auto px-5   d-flex justify-content-center"
              >
                Login
              </button>
            </div>
            <div class="col-md-5">
              <h1 id="heading">svg image</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
