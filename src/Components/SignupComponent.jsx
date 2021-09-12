import React from "react";

const SignupComponent = () => {
  return (
    <React.Fragment>
      <div class="container white-box">
        <div class="row">
          <div class="col-md-6 my-2">
            <h2 className="mb-3">Signup</h2>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="fullname"
                placeholder="Fullname"
              ></input>
            </div>
            <div class="form-group">
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Email address"
              ></input>
            </div>
            
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="username"
                placeholder="Username"
              ></input>
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Password"
              ></input>
            </div>

            <button type="submit" class="btn btn-blue-dark">
              Signup
            </button>
            <a id="signup-already-acc" href="/login">
              Already have an account?
            </a>
          </div>
          <div class="col-md-6 my-2">
            <img
              src={process.env.PUBLIC_URL + "/images/signupImage.svg"}
              alt="signup"
              className="img-fluid float-right"
              width="75%"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SignupComponent;
