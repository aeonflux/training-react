import { React, useState } from "react";
import { App } from "./App";

function EmployeeList( {employeeData}) {
    // const [search, setSearch] = useState ("");

    // })
    return (
        <ul>
            {employeeData.map ((employee, index) => 
                <li key={`employee-${index}`}>{employee.name}</li>)}
        </ul>
    )
}

