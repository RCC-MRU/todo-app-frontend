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
            <div className="description col-md-12">
              <div className="row">
                <div className="title col-md-12">
                  <input type="text" id="title" name="title" />
                </div>
              </div>
              <div className="row">
                <div className="date-time-and-tags">
                  <div className="time-and-date col-md-7">
                    <div className="date">
                      <label for="date"><strong>DATE</strong></label>
                      <input type="date" id="date" name="date" />
                    </div>
                    <div className="time">
                      <div className="start-time">
                        <label for="starttime"><strong>START TIME</strong></label>
                        <input type="time" id="starttime" name="starttime" />
                      </div>
                      <div className="end-time">
                        <label for="endtime"><strong>END TIME</strong></label>
                        <input type="time" id="endtime" name="endtime" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="tags col-md-5">
                      <div className="tags-alignment">
                        <div className="important">
                          <AiFillStar size="30" color="#4A7DFF"/>
                          <input type="button" value="Important" id="" />
                        </div>
                        <div className="completed ">
                          <TiTickOutline size="30" color="#4A7DFF" />
                          <input type="button" value="Completed" id="" />
                        </div>
                        <div className="delete ">
                          <MdDelete size="30" color="#4A7DFF" />
                          <input type="button" value="Delete" id="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="description-of-task col-md-12">
                  <textarea
                    name="description"
                    id="description"
                    cols="137"
                    rows="4"
                    placeholder="Description"
                  ></textarea>
                </div>
              </div>
              <div className="row">
                <div className="add-todo col-md-12">
                  <GoPlus size="30" color="#4A7DFF"/>
                  <input type="button" value="Add ToDo" id="" />
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
