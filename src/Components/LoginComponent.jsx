import React from "react";

const LoginComponent = () => {
  return (
    <React.Fragment>
      <div className="container white-box">
        <div className="row">
          <div className="col-md-6 my-2">
            <h2 className="mb-3">Login</h2>
            <form>
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

              <a id="forgot-password" href="/">
                Forgot Password?
              </a>

              <div className="form-group">
                <button type="submit" class="btn btn-blue-dark">
                  Login
                </button>
              </div>
            </form>
          </div>

          <div className="col-md-6 my-2">
            <img
              src={process.env.PUBLIC_URL + "/images/loginImage.svg"}
              alt="Login"
              className="img-fluid float-right"
              width="75%"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LoginComponent;
