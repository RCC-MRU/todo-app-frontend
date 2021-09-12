import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "./Components/HomeComponent";
import Signup from "./Components/SignupComponent";
import Login from "./Components/LoginComponent";
import Dashboard from "./Components/DashBoardComponent";
import Header from "./Components/HeaderComponent";
import Footer from "./Components/FooterComponent";

const App = () => {
  return (
    <React.Fragment>
      <Header />
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
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
      <Footer />
    </React.Fragment>
  );
};

export default App;
