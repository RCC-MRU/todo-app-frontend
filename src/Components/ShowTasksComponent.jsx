import React, { useState, useEffect } from "react";
import { getTaskList } from "../Utils/axios";
const ShowTasksComponent = () => {
  const [taskData, setTaskData] = useState();
  useEffect(() => {
    getTaskList()
      .then((data) => console.log(data.data))
      .catch((err) => console.log(err));
  });

  return (
    <React.Fragment>
      <div className="container white-box">
        <div className="row">
          <div className="important-tasks col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <p>Important task</p>
          </div>
          <div className="tasks col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <p>TASK-1</p>
            <p>TASK-2</p>
            <p>TASK-3</p>
            <p></p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ShowTasksComponent;
