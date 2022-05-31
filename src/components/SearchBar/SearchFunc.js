import { React } from "react";
import { employeeData } from "./App";

function EmployeeList( {employeeData}) {
    // const [search, setSearch] = useState ("");

    // })
    return (
        <ul>
            {employeeData.map ((employee, index) => (
                <li key={`employee-${index}`}>{employee.name}</li>))}
        </ul>
    )
}