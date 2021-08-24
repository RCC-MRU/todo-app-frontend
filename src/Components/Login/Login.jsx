import React from "react";
import "./Login.css";
import { FaUserCircle } from "react-icons/fa";
import { MdExitToApp } from "react-icons/md";
const Login = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg  bg-nav">
        <a class="navbar-brand" href="#">
          RCC TODO APP
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <div class="user-account">
              <FaUserCircle size={35} />
            </div>
            <a class="nav-link text-white" id="" href="#">
              Username
            </a>
            <div class="logout">
              <MdExitToApp size={35} />
            </div>
            <a class="nav-link text-white" href="#">
              Logout
            </a>
          </div>
        </div>
      </nav>
      <div class="container ">
        <div class=" white-box">
          <div class="row main-row">
            <div class="col-md-7 ">
              <div className="container">
                <form>
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
                  <div className="text-center ">
                    <button type="submit" class="text-white login-button ">
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div class="col-md-5">
              <img
                class="login-image"
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
