import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "./Components/HomeComponent";
import Signup from "./Components/SignupComponent";
import Login from "./Components/LoginComponent";
import Dashboard from "./Components/DashBoardComponent";
import Header from "./Components/HeaderComponent";
import Footer from "./Components/FooterComponent";
import ShowTasksComponent from "./Components/ShowTasksComponent";
import TodoComponent from "./Components/TodoComponent";

import { TodoContext } from "./Utils/Context";

//local storage items
const emailLocal = sessionStorage.getItem("email");
const tokenLocal = sessionStorage.getItem("token");
const nameLocal = sessionStorage.getItem("name");

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <TodoContext.Provider value={{ emailLocal, tokenLocal, nameLocal }}>
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
