import React, { useState, useContext } from "react";
import { userLogin } from "../Utils/axios";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { TodoContext } from "../Utils/Context";

const LoginComponent = () => {
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });
  const context = useContext(TodoContext);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setLogin({
      ...login,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);

    userLogin(login)
      .then((res) => {
        let resp = res.data;
        console.log(resp);
        toast.success(resp.message);

        context.setCredentials({
          token: resp.token,
          name: resp.username,
        });

        // setting the token in session storage
        sessionStorage.setItem("username", resp.username);
        sessionStorage.setItem("token", resp.token);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message);
      });
  };

  return (
    <React.Fragment>
      <div className="container white-box">
        <div className="row">
          <div className="col-md-6 my-2">
            <h2 className="mb-3">Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  placeholder="Username"
                  onChange={handleChange}
                ></input>
              </div>

              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Password"
                  autoComplete="true"
                  onChange={handleChange}
                ></input>
              </div>

              <a id="forgot-password" href="/">
                Forgot Password?
              </a>

              <div className="form-group">
                <button type="submit" className="btn btn-blue-dark">
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
              height="100%"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LoginComponent;
