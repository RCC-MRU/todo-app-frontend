import React from "react";
import { Link } from "react-router-dom";

const HomeComponent = () => {
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

            <Link to="/register" type="button" className="btn btn-blue-dark">
              Register
            </Link>

            <Link to="/login" type="button" className="btn btn-blue-dark">
              Login
            </Link>
          </div>

          <div className="col-md-6 my-2">
            <img
              src={process.env.PUBLIC_URL + "/images/homePage.svg"}
              alt="Homepage"
              className="img-fluid float-right"
              width="75%"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomeComponent;
