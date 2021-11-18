import React, { useState, useContext } from "react";
import { userSignup } from "../Utils/axios";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TodoContext } from "../Utils/Context";

const SignupComponent = () => {
  const [signup, setSignup] = useState({
    fullname: "",
    email: "",
    username: "",
    password: "",
  });
  const history = useHistory();
  const context = useContext(TodoContext);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setSignup({
      ...signup,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(event.target);

    userSignup(signup)
      .then((res) => {
        let resp = res.data;
        console.log(resp);
        toast.success(resp.message);

        context.setCredentials({
          token: resp.token || "token",
          name: resp.username || "username",
        });

        // setting the token in session storage
        sessionStorage.setItem("username", resp.username);
        sessionStorage.setItem("token", resp.token);

        history.push("/login");
      })
      .catch((err) => {
        console.log(err.message);
        toast.error(err.response.data.message);
      });
  };

  return (
    <React.Fragment>
      <div className="container white-box">
        <div className="row">
          <div className="col-md-6 my-2">
            <h2 className="mb-3">Signup</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="fullname"
                  name="fullname"
                  placeholder="Fullname"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Email address"
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  placeholder="Username"
                  onChange={handleChange}
                />
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
                />
              </div>

              <button type="submit" className="btn btn-blue-dark">
                Signup
              </button>
              <a id="signup-already-acc" href="/login">
                Already have an account?
              </a>
            </form>
          </div>
          <div className="col-md-6 my-2">
            <img
              src={process.env.PUBLIC_URL + "/images/signupImage.svg"}
              alt="signup"
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

export default SignupComponent;
