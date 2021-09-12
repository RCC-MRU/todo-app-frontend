import React from "react";

const SignupComponent = () => {
  return (
    <React.Fragment>
      <div className="container white-box">
        <div className="row">
          <div className="col-md-6 my-2">
            <h2 className="mb-3">Signup</h2>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="fullname"
                placeholder="Fullname"
              ></input>
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email address"
              ></input>
            </div>

            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Username"
              ></input>
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
              ></input>
            </div>

            <button type="submit" className="btn btn-blue-dark">
              Signup
            </button>
            <a id="signup-already-acc" href="/login">
              Already have an account?
            </a>
          </div>
          <div className="col-md-6 my-2">
            <img
              src={process.env.PUBLIC_URL + "/images/signupImage.svg"}
              alt="signup"
              className="img-fluid float-right"
              width="75%"
              height="100%"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SignupComponent;
