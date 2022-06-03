import React from 'react';
import './EmployeeCard.css'

const EmployeeCard = ({ name, jobTitle, department , onPress}) => {

    return(
        <div className="employee-card">
                    <div className="image-wrapper">
                       <img src="https://www.achievers.com/wp-content/uploads/2020/05/05-27-20-2.jpg" className="employee-icon" />
                    </div>
                    <div className="card-label">
                       {name}
                    </div>
                    <div className="card-sub-label">
                         {jobTitle}
                    </div>
                    <div className="card-sub-label">
                         {department}
                    </div>
                    <button 
                        className="card-button" 
                        onClick={onPress}
                    >
                        See Profile
                    </button>
        </div>
    )

}


export { EmployeeCard }