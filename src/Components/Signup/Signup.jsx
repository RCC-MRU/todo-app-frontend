import React from "react";
import "./Signup.css";
const Signup = () => {
  return (
    <div>
      <div class="container ">
        <div class=" white-box">
          <div class="row main-signup-row">
            <div class="col-md-7 ">
              <div class="form-group">
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Fullname"
                ></input>
              </div>
              <div class="form-group">
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Email address"
                ></input>
              </div>
              <div class="form-group">
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Full name"
                ></input>
              </div>
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
              </div>

              <button
                type="button"
                class="btn btn-primary signup-button m-auto px-5   d-flex justify-content-center"
              >
                Signup
              </button>
              <a id="signup-already-acc" href="#">
                Already have an account?
              </a>
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

export default Signup;
