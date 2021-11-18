import React, { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdExitToApp } from "react-icons/md";

import { TodoContext } from "../../Utils/Context";

const HeaderComponent = () => {
  const context = useContext(TodoContext);

  console.log(context);

  const logout = () => {
    sessionStorage.clear();
    context.setCredentials(null);
  };

  return context.credentials?.token ? (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-nav">
        <div className="container">
          <a className="navbar-brand" href="/">
            Time Management TODO
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
                  <FaUserCircle size={24} /> {context.credentials?.name}
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/" onClick={logout}>
                  <MdExitToApp size={24} /> Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-nav">
        <div className="container">
          <a className="navbar-brand" href="/">
          Time Management TODO
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
              {/* <li className="nav-item active">
                <a className="nav-link" href="/">
                  <FaUserCircle size={24} /> {context.credentials?.name}
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/" onClick={logout}>
                  <MdExitToApp size={24} /> Logout
                </a>
              </li> */}
              <li className="nav-item active">
                <a href="/login" className="btn btn-header">
                  Login
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
