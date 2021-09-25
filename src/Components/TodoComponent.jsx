import React from "react";
import { AiFillStar } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import { BsCheckAll } from "react-icons/bs";

const TodoComponent = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="white-box">
          <form action="/">
            <div className="row">
              <div className="col-md-9">
                <section className="form-group pb-2">
                  <input
                    type="text"
                    name="title"
                    id="title"
                    className="form-control text-field"
                    placeholder="Todo title"
                  />
                </section>

                <section className="row pb-2">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="starting-time">Starting Time</label>
                      <input
                        type="datetime-local"
                        id="starting-time"
                        name="starting-time"
                        className="form-control text-field"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="ending-time">Ending Time</label>
                      <input
                        type="datetime-local"
                        id="ending-time"
                        name="ending-time"
                        className="form-control text-field"
                      />
                    </div>
                  </div>
                </section>

                <section className="form-group pb-2">
                  <textarea
                    name="description"
                    id="description"
                    rows="4"
                    placeholder="Todo description"
                    className="form-control text-field"
                    style={{ resize: "none" }}
                    maxLength={200}
                  ></textarea>
                </section>

                <div className="form-group">
                  <button className="btn btn-blue-dark" type="submit">
                    <GoPlus size={22} /> &nbsp; Add Todo
                  </button>
                </div>
              </div>

              <div className="col-md-3">
                <div className="form-group text-center">
                  <button className="btn btn-blue-dark">
                    <AiFillStar size={30} /> &nbsp; Important
                  </button>
                </div>
                <div className="form-group text-center">
                  <button className="btn btn-blue-dark">
                    <BsCheckAll size={30} /> &nbsp; Completed
                  </button>
                </div>
                <div className="form-group text-center">
                  <button className="btn btn-blue-dark">
                    <MdDelete size={30} /> &nbsp; Delete
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TodoComponent;

/* 
&nbsp; = 1space
&ensp; = 2space
&emsp; = 4space
*/
