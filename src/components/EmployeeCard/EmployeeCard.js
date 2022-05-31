import React from "react";
import "./EmployeeCard.css";

const EmployeeCard = ({ name, jobTitle, department, onPress, image }) => {
  return (
    <>
      <div className="employee-card relative">
      <div className="rounded-full w-20 -mt-10 ml-5 absolute">
        <img
          src={image}
          className="employee-icon"
          alt=""
        />
      </div>

      <div className="card-name">{name}</div>
      <div className="card-desc">{jobTitle}</div>
      <div className="card-desc">{department}</div>
      {/* <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <a href="#" class="fa fa-linkedin"></a>
      </div> */}
      <button className="card-button" onClick={onPress}>
        See Profile
      </button>
    </div>
    </>
  );
};

export { EmployeeCard };