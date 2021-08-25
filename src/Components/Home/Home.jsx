import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <React.Fragment>
      <div className="container home">
        <div className="row">
          <div className="login-left col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <h2>Get Started</h2>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
              eius quidem in blanditiis quasi consequatur, laudantium officiis
              nam praesentium perspiciatis architecto itaque non, debitis facere
              exercitationem illum incidunt adipisci accusamus.Lorem ipsum dolor
              sit amet, consectetur adipisicing elit. Sequi eius quidem in
              blanditiis quasi consequatur, laudantium off
            </p>
            <br />
            <button type="button" class="btn btn-primary btn-lg btn-block">
              Sign Up
            </button>
            <br />
            <button type="button" class="btn btn-primary btn-lg btn-block">
              Login
            </button>
          </div>

          <div className="login-right  col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <img
              src={process.env.PUBLIC_URL + "/images/homePage.svg"}
              alt=""
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
