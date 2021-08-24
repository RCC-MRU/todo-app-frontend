import React from "react";
import "./Login.css";
import { FaUserCircle } from "react-icons/fa";
import { MdExitToApp } from "react-icons/md";
const Login = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  bg-nav">
        <a className="navbar-brand" href="#">
          RCC TODO APP
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <div className="user-account">
              <FaUserCircle size={35} />
            </div>
            <a className="nav-link text-white" id="" href="#">
              Username
            </a>
            <div className="logout">
              <MdExitToApp size={35} />
            </div>
            <a className="nav-link text-white" href="#">
              Logout
            </a>
          </div>
        </div>
      </nav>
      <div className="container d-grid place-item-center">
        <div className=" white-box">
          <div className="row main-row">
            <div className="col-md-6 m-auto ">
              <form>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Username"
                  ></input>
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Password"
                  ></input>
                  <a id="forgot-password" href="#">
                    Forgot Password?
                  </a>
                </div>
                <div className="text-center ">
                  <button type="submit" class="text-white login-button ">
                    Login
                  </button>
                </div>
              </form>
            </div>

            <div className="col-md-6 m-auto p-auto">
              <img
                className="login-image"
                src={process.env.PUBLIC_URL + "/images/loginImage.svg"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
