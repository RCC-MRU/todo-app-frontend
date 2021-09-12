import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdExitToApp } from "react-icons/md";

const HeaderComponent = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-nav">
        <div className="container">
          <a className="navbar-brand" href="/">
            RCC Todo Application
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  <FaUserCircle size={24} /> Username
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <MdExitToApp size={24} /> Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default HeaderComponent;
