import React from 'react';
import './EmployeeCard.css'

const EmployeeCard = ({ name, jobTitle, department , onPress}) => {

    return(
        <div className="employee-card">
                    <img src="https://www.achievers.com/wp-content/uploads/2020/05/05-27-20-2.jpg" className="employee-icon" />
                    <div className="card-label">
                      Name: <span className="card-value">{name}</span>
                    </div>
                    <div className="card-label">
                      Job Title: <span className="card-value">{jobTitle}</span>
                    </div>
                    <div className="card-label">
                      Department: <span className="card-value">{department}</span>
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