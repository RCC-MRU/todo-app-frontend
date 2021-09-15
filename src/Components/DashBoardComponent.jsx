import React from 'react'

const DashBoardComponent = () => {
  return (
    <React.Fragment>
      <div className="container white-box">
        <div className="row">
          <div className="col-md-8 m-0">
            <img
              src={process.env.PUBLIC_URL + "/images/dashBoard.svg"}
              alt="Homepage"
              className="img-fluid "
              width="70%"
              height= "70%"
            />
          </div>
          <div className="col-md-4">
            <button type="button" class="btn btn-primary">ADD</button>
            <button type="button" class="btn btn-primary">Tick</button>
            <button type="button" class="btn btn-primary ">LIST</button>
        </div>
      </div>
      </div>
    </React.Fragment>
  )
};

export default DashBoardComponent
