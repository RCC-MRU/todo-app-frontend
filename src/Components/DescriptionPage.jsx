import React from "react";
import { AiFillStar } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import { TiTickOutline } from "react-icons/ti";

const DescriptionPage = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="white-box">
          <div className="detailed-Todo">
            <div className="description">
              <div className="row">
                <div className="title col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8">
                  <h3>Title</h3>
                </div>
              </div>
              <div className="row">
                <div className="tags col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8">
                  <div className="important">
                    <AiFillStar size="30" />
                    <h5>Important</h5>
                  </div>
                  <div className="completed">
                    <TiTickOutline size="30" />
                    <h5>Completed</h5>
                  </div>
                  <div className="delete">
                    <MdDelete size="30" />
                    <h5>Delete</h5>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="description-of-task col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8">
                  <h5>Description</h5>
                </div>
              </div>
              <div className="row">
                <div className="addTodo col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8">
                  <GoPlus size="30" />
                  <h5>Add ToDo</h5>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="timeAndDate col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                <div className="date">
                  <h5>20 Sept</h5>
                </div>
                <div className="startTime">
                  <h5>9:00 AM</h5>
                </div>
                <div className="endTime">
                  <h5>11:00AM</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DescriptionPage;
