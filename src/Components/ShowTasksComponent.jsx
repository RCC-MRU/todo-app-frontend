import React from 'react';

const ShowTasksComponent = (props) => {
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
          <p>{props.match.params.id}</p>
        </div>
      </div>
    </div>
    </React.Fragment>
  )
}

export default ShowTasksComponent