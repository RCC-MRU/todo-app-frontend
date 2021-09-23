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
          <div className="row">
            <div className="description col-md-10">
              <div className="row">
                <div className="title col-md-10 ">
                  <input type="text" id="title" name="title"/>
                </div>
              </div>
              <div className="row">
                <div className="tags col-md-10 ">
                  <div className="important ">
                    <AiFillStar size="30"/>
                    <input type="button" value="Important" id=""/>
                  </div>
                  <div className="completed ">
                    <TiTickOutline size="30" />
                    <input type="button" value="Completed" id=""/>
                  </div>
                  <div className="delete ">
                    <MdDelete size="30" />
                    <input type="button" value="Delete" id=""/>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="description-of-task col-md-10">
                  <textarea name="description" id="description" cols="90" rows="6" placeholder="Description"></textarea>
                </div>
              </div>
              <div className="row">
                <div className="add-todo col-md-10">
                  <GoPlus size="30" />
                  <input type="button" value="Add ToDo" id=""/>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="time-and-date col-md-8">
                <div className="date">
                  <h5>20 Sept</h5>
                </div>
                <div className="start-time">
                  <h5>9:00 AM</h5>
                </div>
                <div className="end-time">
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
