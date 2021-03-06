import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TodoContext } from "../Utils/Context";

const HomeComponent = () => {
  const context = useContext(TodoContext);
  return (
    <React.Fragment>
      <div className="container white-box">
        <div className="row">
          <div className="col-md-6 my-2">
            <h2>Get Started</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
              eius quidem in blanditiis quasi consequatur, laudantium officiis
              nam praesentium perspiciatis architecto itaque non, debitis facere
              exercitationem illum incidunt adipisci accusamus.Lorem ipsum dolor
              sit amet, consectetur adipisicing elit. Sequi eius quidem in
              blanditiis quasi consequatur, laudantium off
            </p>

            {context.credentials?.token ? (
              <React.Fragment>
                <Link
                  to="/dashboard"
                  type="button"
                  className="btn btn-blue-dark"
                >
                  Dashboard
                </Link>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Link
                  to="/register"
                  type="button"
                  className="btn btn-blue-dark"
                >
                  Signup
                </Link>

                <Link to="/login" type="button" className="btn btn-blue-dark">
                  Login
                </Link>
              </React.Fragment>
            )}
          </div>

          <div className="col-md-6 my-2">
            <img
              src={process.env.PUBLIC_URL + "/images/homePage.svg"}
              alt="Homepage"
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

export default HomeComponent;
