import React, { useState } from "react";
import "./App.css";
import { EmployeeCard } from "./components/EmployeeCard/EmployeeCard";
import { EmployeeView } from "./components/EmployeeView/EmployeeView";
import { SearchBar } from "./components/SearchBar/SearchBar";

function App() {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [query, setQuery] = useState("");
  const employeeData = [
    {
      name: "Danica Mendez",
      jobTitle: "HR Professional",
      department: "Human Resources",
      image:
        "https://static.dazzling.news/img/articles/3882/800x800/5aa7dd877388d_man0.jpg",
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
      image:
        "https://scontent.fmnl9-3.fna.fbcdn.net/v/t39.30808-6/279088105_10224764379848833_8624429774936332918_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=vDTqRkPmIIAAX8QJf5X&_nc_ht=scontent.fmnl9-3.fna&oh=00_AT_i_gfA26o-ruUku-TVBCISB7kUz0Ru3mcyF8vXyTboDw&oe=629BEBCA",
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
      image:
        "https://scontent.fmnl9-3.fna.fbcdn.net/v/t1.6435-9/105393427_3056839944400958_6051634920114229388_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_ohc=UkWyq4FpzaQAX812O9R&_nc_ht=scontent.fmnl9-3.fna&oh=00_AT8R_wwjy6GrpMvBln7aQ3hO4T1DqwsOQmYbDgjja6xPoQ&oe=62BCFE23",
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
      <div className="grid gap-10 grid-cols-2">
        <div>
          <h1>Team Viewer</h1>
        </div>
        <div>
          <SearchBar setQuery={setQuery} />
        </div>
      </div>

      <div className="card-container">
        {query === ""
          ? employeeData.map((employee, index) => {
              return (
                <EmployeeCard
                  name={employee.name}
                  image={employee.image}
                  jobTitle={employee.jobTitle}
                  department={employee.department}
                  onPress={() => {
                    handleEmployeeChange(index);
                  }}
                />
              );
            })
          : employeeData
              .filter((employee) => employee.name.includes(query))
              .map((employee, index) => {
                return (
                  <EmployeeCard
                    name={employee.name}
                    image={employee.image}
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
    </div>
  );
}

export default App;
