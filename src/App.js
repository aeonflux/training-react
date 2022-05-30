import React, { useState } from "react";
import "./App.css";
import { EmployeeCard } from "./components/EmployeeCard/EmployeeCard";
import { EmployeeView } from "./components/EmployeeView/EmployeeView";
import { SearchBar } from "./components/SearchBar/SearchBar";

function App() {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const employeeData = [
    {
      name: "Danica Mendez",
      jobTitle: "HR Professional",
      department: "Human Resources",
      personalInformation: {
        firstName: "Danica",
        lastName: "Mendez",
        birthday: "1995-15-08",
        sex: "Female",
        age: 26,
        nickname: "Dani",
      },
      payroll: {
        baseSalary: 27000,
        hiringDate: "2022-01-01",
      },
      benefits: {
        sss: true,
        pagibig: true,
        philhealth: true,
        leavesAvailable: 10,
      },
      qualifications: {
        education: {
          primary: "John Dewey School",
          secondary: "Quezon City Science High School",
          tertiary: "BS-HRM University of Santo Tomas",
        },
        techSkills: [
          { skill: "microsoft skills" },
          { skill: "keynote presentation" },
          { skill: "document management" },
        ],
      },
    },
    {
      name: "Toni Carpio",
      jobTitle: "Software Engineer",
      department: "Engineering",
      personalInformation: {
        firstName: "Toni",
        lastName: "Carpio",
        birthday: "1995-15-08",
        sex: "Female",
        age: 26,
        nickname: "Dani",
      },
      payroll: {
        baseSalary: 27000,
        hiringDate: "2022-01-01",
      },
      benefits: {
        sss: true,
        pagibig: true,
        philhealth: true,
        leavesAvailable: 10,
      },
      qualifications: {
        education: {
          primary: "John Dewey School",
          secondary: "Quezon City Science High School",
          tertiary: "BS-CS University of Santo Tomas",
        },
        techSkills: [
          { skill: "microsoft skills" },
          { skill: "keynote presentation" },
          { skill: "document management" },
        ],
      },
    },
    {
      name: "Ethyl",
      jobTitle: "Software Engineer",
      department: "Engineering",
      personalInformation: {
        firstName: "Ethyl",
        lastName: "De Vera",
        birthday: "1995-15-08",
        sex: "Female",
        age: 26,
        nickname: "Dani",
      },
      payroll: {
        baseSalary: 27000,
        hiringDate: "2022-01-01",
      },
      benefits: {
        sss: true,
        pagibig: true,
        philhealth: true,
        leavesAvailable: 10,
      },
      qualifications: {
        education: {
          primary: "John Dewey School",
          secondary: "Quezon City Science High School",
          tertiary: "BS-CS University of Santo Tomas",
        },
        techSkills: [
          { skill: "microsoft skills" },
          { skill: "keynote presentation" },
          { skill: "document management" },
        ],
      },
    },
  ];

  const handleEmployeeChange = (index) => {
    setSelectedEmployee(index);
  };

  console.log("selected:", selectedEmployee);

  return (
    <div className="App">
      <h1>Ethyl's Employee Database</h1>
      <div className="card-container">
        {employeeData.map((employee, index) => {
          return (
            <EmployeeCard
              name={employee.name}
              jobTitle={employee.jobTitle}
              department={employee.department}
              onPress={() => {
                handleEmployeeChange(index);
              }}
            />
          );
        })}
      </div>
      {selectedEmployee === 0 && (
        <div className="selection">THIS IS FOR SELECTION 1 - Danica ONLY</div>
      )}
      {selectedEmployee === 1 && (
        <div className="selection">THIS IS FOR SELECTION 2 - Toni ONLY</div>
      )}
      {selectedEmployee === 2 && (
        <div className="selection"> THIS IS FOR SELECTION 3 - Ethyl ONLY </div>
      )}
      {selectedEmployee !== null && (
        <EmployeeView
          personalInfo={employeeData[selectedEmployee].personalInformation}
          benefits={employeeData[selectedEmployee].benefits}
          payroll={employeeData[selectedEmployee].payroll}
          qualifications={employeeData[selectedEmployee].qualifications}
        />
      )}
      <SearchBar />
    </div>
  );
}

export default App;
