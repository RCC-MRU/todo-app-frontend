import React from 'react';
import {BsCheckAll, BsListUl} from "react-icons/bs";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <React.Fragment>
      <div class="container dashboard">
        <div className="dashboard-left">
          <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt=""/>
        </div>
        <div className="dashboard-right">
        <BsCheckAll/>
        <BsListUl/>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Dashboard
