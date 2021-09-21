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
              <div className="title">
                <h3>Title</h3>
              </div>
              <div class="tags">
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
              <div className="description-of-task">
                <h6>Description</h6>
              </div>
              <div className="addTodo">
                <GoPlus size="30" />
                <h5>Add ToDo</h5>
              </div>
            </div>
            <div>
              <div className="timeAndDate">
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
