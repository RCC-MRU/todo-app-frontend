import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "./Components/HomeComponent";
import Signup from "./Components/SignupComponent";
import Login from "./Components/LoginComponent";
import Dashboard from "./Components/DashBoardComponent";
import Header from "./Components/Header/HeaderComponent";
import Footer from "./Components/FooterComponent";
import ShowTasksComponent from "./Components/ShowTasksComponent";
import TodoComponent from "./Components/TodoComponent";

import { TodoContext } from "./Utils/Context";
import { ToastContainer } from "react-toastify";

//local storage items
const tokenLocal = sessionStorage.getItem("token");
const usernameLocal = sessionStorage.getItem("username");

const App = () => {
  const [credentials, setCredentials] = React.useState({
    token: tokenLocal,
    name: usernameLocal,
  });

  return (
    <React.Fragment>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        draggable={true}
        theme="colored"
      />
      <Header />
      <TodoContext.Provider value={{ credentials, setCredentials }}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/register">
            <Signup />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/description-page">
            <TodoComponent />
          </Route>
          <Route exact path="/todos">
            <ShowTasksComponent />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </TodoContext.Provider>
      <Footer />
    </React.Fragment>
  );
};

export default App;
