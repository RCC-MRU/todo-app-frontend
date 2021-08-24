import React from "react";
import "./Signup.css";
import { FaUserCircle } from "react-icons/fa";
import { MdExitToApp } from "react-icons/md";
const Signup = () => {
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
              <img className="signup-image"
                src={process.env.PUBLIC_URL + "/images/signupImage.svg"}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
