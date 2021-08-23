import React from "react";
import "./Login.css";
const Login = () => {
  return (
    <div>
      <div class="container m-auto p-0 d-grid place-item-center ">
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
              </div>
              <button type="button" class="btn btn-primary m-auto px-5 rounded  d-flex justify-content-center">
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
