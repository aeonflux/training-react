import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";
import { EmployeeCard } from "./components/EmployeeCard/EmployeeCard";
import { EmployeeView } from "./components/EmployeeView/EmployeeView";
import { SearchBar } from "./components/SearchBar/SearchBar";
import PersonalInfoForm from "./components/Form/PersonalInfoForm";
import PayrollForm from "./components/Form/PayrollForm";
import BenefitsForm from "./components/Form/BenefitsForm";
import QualificationForm from "./components/Form/QualificationForm";
import { Stepper, Step } from "react-form-stepper";

function App() {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [query, setQuery] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [selectedStepperIndex, setSelectedStepperIndex] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
        "https://scontent.fmnl9-3.fna.fbcdn.net/v/t39.30808-6/279088105_10224764379848833_8624429774936332918_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=EWFXWTlQ--YAX_MfXFu&_nc_ht=scontent.fmnl9-3.fna&oh=00_AT-rgqj44kDIYSWQJ_274DBxxpjktxu8dqNElyZQ_61vXQ&oe=62A1DA8A",
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

  const handleSearch = (query) => {
    let filteredEmployees = [];
    filteredEmployees = employeeData.filter((employee) => {
      return employee.name.toLowerCase().includes(query.toLowerCase());
    }); // filter the employees based on the query
    setSearchData(filteredEmployees);
  };

  // console.log("selected:", selectedEmployee);

  const onSubmit = (data) => console.log("button clicked", data);

  return (
    <div className="App">
      <div className="grid gap-10 grid-cols-2">
        <div>
          <img
            className="h-32 w-32"
            src="https://media.discordapp.net/attachments/971581479471706162/982159692262432808/Untitled_design.png"
            alt="team-viewer"
          />
        </div>
        <div className="mt-12">
          <SearchBar setQuery={setQuery} handleSearch={handleSearch} />
        </div>
      </div>

      <div className="card-container">
        {query === ""
          ? employeeData.map((employee, index) => {
              return (
                <EmployeeCard
                  key={index.toString()}
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
          : searchData.map((employee, index) => {
              return (
                <EmployeeCard
                  key={index.toString()}
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
      {selectedEmployee !== null && (
        <EmployeeView
          personalInfo={employeeData[selectedEmployee].personalInformation}
          benefits={employeeData[selectedEmployee].benefits}
          payroll={employeeData[selectedEmployee].payroll}
          qualifications={employeeData[selectedEmployee].qualifications}
        />
      )}
      <div className="bg-white py-5 m-5 rounded-lg shadow-lg ">
        <h1 className="bg-pink-500 text-white text-left text-2xl p-5 mb-3">
          Create an employee
        </h1>

        <Stepper activeStep={selectedStepperIndex}>
          <Step label="Personal Info">
            <button
              className="bg-pink-500 w-12 h-12 rounded-full"
              onClick={() => setSelectedStepperIndex(0)}
            >
              1
            </button>
          </Step>

          <Step label="Payroll Form">
            <button
              className="bg-pink-500 w-12 h-12 rounded-full"
              onClick={() => setSelectedStepperIndex(1)}
            >
              2
            </button>
          </Step>

          <Step label="Benefits Form">
            <button
              className="bg-pink-500 w-12 h-12 rounded-full"
              onClick={() => setSelectedStepperIndex(2)}
            >
              3
            </button>
          </Step>
          <Step label="Qualification Form">
            <button
              className="bg-pink-500 w-12 h-12 rounded-full"
              onClick={() => setSelectedStepperIndex(3)}
            >
              4
            </button>
          </Step>
        </Stepper>

        {selectedStepperIndex === 0 && (
          <PersonalInfoForm
            onNext={() => setSelectedStepperIndex(selectedStepperIndex + 1)}
            register={register}
            onSubmit={handleSubmit(onSubmit)}
            errors={errors}
          />
        )}

        {selectedStepperIndex === 1 && (
          <PayrollForm
            onNext={() => setSelectedStepperIndex(selectedStepperIndex + 1)}
            register={register}
            onSubmit={handleSubmit(onSubmit)}
            errors={errors}
          />
        )}
        {selectedStepperIndex === 2 && (
          <BenefitsForm
            onNext={() => setSelectedStepperIndex(selectedStepperIndex + 1)}
            register={register}
            onSubmit={handleSubmit(onSubmit)}
            errors={errors}
          />
        )}
        {selectedStepperIndex === 3 && (
          <QualificationForm
            register={register}
            onSubmit={handleSubmit(onSubmit)}
            errors={errors}
          />
        )}
      </div>
    </div>
  );
}

export default App;
