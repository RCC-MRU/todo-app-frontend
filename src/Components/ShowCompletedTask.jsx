import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { TodoContext } from "../Utils/Context";
import { BaseUrl } from "../Utils/BaseURL";

const ShowCompletedTask = () => {
  const [taskData, setTaskData] = useState([]);
  const contextData = useContext(TodoContext);

  useEffect(() => {
    axios({
      url: `${BaseUrl}/todos/display`,
      method: "GET",
      headers: {
        authorization: `Bearer ${contextData?.credentials?.token}`,
      },
    })
      .then((resp) => {
        console.log(resp.data.data);
        setTaskData(resp.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [contextData?.credentials?.token]);

  return (
    <React.Fragment>
      <div className="container white-box">
        <h3 style={{ marginBottom: 15 }}>Completed tasks</h3>
        <div className="task-list">
          {taskData.length > 0 ? (
            taskData.map((tasks) => {
              return (
                <div className="task-list-item">
                  <h5>{tasks.task_title}</h5>
                </div>
              );
            })
          ) : (
            <div>No tasks</div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ShowCompletedTask;
