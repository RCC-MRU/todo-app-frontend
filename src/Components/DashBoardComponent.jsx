import React from "react";
import { BsPlusCircle } from "react-icons/bs";
import { MdDoneAll } from "react-icons/md";
import { FaList } from "react-icons/fa";

import { Link } from "react-router-dom";

const DashBoardComponent = () => {
  return (
    <React.Fragment>
      <div className="container white-box">
        <div className="row">
          <div
            className="col-md-8 "
            style={{ display: "grid", placeItems: "center" }}>
            <img
              src={process.env.PUBLIC_URL + "/images/dashBoard.svg"}
              alt="Homepage"
              className="img-fluid float-left"
              width="75%"
              height="100%"
            />
          </div>
          <div className="col-md-4  d-flex " style={{ alignItems: "flex-end" }}>
            <Link
              to="/description-page"
              type="button"
              className="btn DashboardButton"
              tooltip="Add Todo">
              <BsPlusCircle size={30} />
            </Link>
            <Link type="button" className="btn DashboardButton" to="/">
              <MdDoneAll size={30} />
            </Link>
            <Link type="button" className="btn DashboardButton" to="/todos">
              <FaList size={30} />
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DashBoardComponent;
