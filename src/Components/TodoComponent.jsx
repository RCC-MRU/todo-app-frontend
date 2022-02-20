import React, { useState, useContext } from "react";
import { AiFillStar } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import { BsCheckAll } from "react-icons/bs";
import axios from "axios";
import { TodoContext } from "../Utils/Context";
import { BaseUrl } from "../Utils/BaseURL";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TodoComponent = () => {
  const [todoData, setTodoData] = useState({
    taskTitle: "",
    endingTime: "",
    description: "",
  });

  const contextData = useContext(TodoContext);

  const handleChange = async (e) => {
    console.log(todoData);
    setTodoData({
      ...todoData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(todoData);

    // TODO: add the axios code here
    axios({
      url: `${BaseUrl}/todos/add`,
      method: "POST",
      data: todoData,
      headers: {
        authorization: `Bearer ${contextData?.credentials?.token}`,
      },
    })
      .then((resp) => {
        console.log(resp.data);
        toast.success(resp.data.message);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message);
      });
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="white-box">
          <form method="POST" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-9">
                <section className="form-group">
                  {/* <label htmlFor="title">Title</label> */}

                  <input
                    type="text"
                    name="taskTitle"
                    id="title"
                    className="form-control text-field"
                    placeholder="Todo title"
                    onChange={handleChange}
                    required
                  />
                </section>

                <section className="form-group">
                  {/* <label htmlFor="ending-time">Ending Time</label> */}
                  <input
                    type="datetime-local"
                    id="ending-time"
                    name="endingTime"
                    className="form-control text-field"
                    onChange={handleChange}
                    required
                  />
                </section>

                <section className="form-group">
                  {/* <label htmlFor="description">Description</label> */}

                  <textarea
                    name="description"
                    id="description"
                    rows="4"
                    placeholder="Todo description"
                    className="form-control text-field"
                    onChange={handleChange}
                    style={{ resize: "none" }}
                    maxLength={200}></textarea>
                </section>

                <div className="form-group">
                  <button
                    className="btn btn-blue-dark"
                    type="submit"
                    name="submit">
                    <GoPlus size={20} /> &nbsp; Add Todo
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

/* 
remove completed and delete in add todo action
*/
