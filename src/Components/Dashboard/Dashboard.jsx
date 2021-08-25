import React from "react";
import { BsCheckAll, BsListUl } from "react-icons/bs";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <React.Fragment>
      <div className="container dashboard">
        <div className="row">
          <div className="dashboard-img col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <img
              src={process.env.PUBLIC_URL + "/images/dashboardPage.svg"}
              alt=""
            />
            <br />
          </div>
          <div className="dashboard-icons col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="completed-icon">
              <BsCheckAll size="55" />
            </div>
            <div className="todo-icon">
              <BsListUl size="55" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
