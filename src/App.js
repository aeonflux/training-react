import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
// import { EmployeeCard } from './components/EmployeeCard/EmployeeCard';
// import { EmployeeView } from './components/EmployeeView/EmployeeView';
import { useForm } from "react-hook-form";

function App() {

  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const employeeData = [
  {
    name: "Danica Mendez",
    jobTitle: "HR Professional",
    department: 'Human Resources',
    personalInformation: {
      firstName: 'Danica',
      lastName: 'Mendez',
      birthday: '1995-15-08',
      sex: 'Female',
      age: 26,
      nickname: "Dani"
    },
    payroll: {
      baseSalary: 27000,
      hiringDate: '2022-01-01'
    },
    benefits: {
      sss: true,
      pagibig: true,
      philhealth: true,
      leavesAvailable: 10
    },
    qualifications: {
      education: {
        primary: 'John Dewey School',
        secondary: 'Quezon City Science High School',
        tertiary: 'BS-HRM University of Santo Tomas'
      },
      techSkills: [ 
        { skill: 'microsoft skills'} , 
        { skill: 'keynote presentation'},
        { skills: 'document management'}
      ]
    }
  },
  {
    name: "Toni Carpio",
    jobTitle: "Software Engineer",
    department: 'Engineering',
    personalInformation: {
      firstName: 'Toni',
      lastName: 'Carpio',
      birthday: '1995-15-08',
      sex: 'Female',
      age: 26,
      nickname: "Dani"
    },
    payroll: {
      baseSalary: 27000,
      hiringDate: '2022-01-01'
    },
    benefits: {
      sss: true,
      pagibig: true,
      philhealth: true,
      leavesAvailable: 10
    },
    qualifications: {
      education: {
        primary: 'John Dewey School',
        secondary: 'Quezon City Science High School',
        tertiary: 'BS-CS University of Santo Tomas'
      },
      techSkills: [
        { skill: 'microsoft skills'} , 
        { skill: 'keynote presentation'},
        { skills: 'document management'}
      ]
    }
  },
  {
    name: "Ethyl",
    jobTitle: "Software Engineer",
    department: 'Engineering',
    personalInformation: {
      firstName: 'Ethyl',
      lastName: 'De Vera',
      birthday: '1995-15-08',
      sex: 'Female',
      age: 26,
      nickname: "Dani"
    },
    payroll: {
      baseSalary: 27000,
      hiringDate: '2022-01-01'
    },
    benefits: {
      sss: true,
      pagibig: true,
      philhealth: true,
      leavesAvailable: 10
    },
    qualifications: {
      education: {
        primary: 'John Dewey School',
        secondary: 'Quezon City Science High School',
        tertiary: 'BS-CS University of Santo Tomas'
      },
      techSkills: [
        { skill: 'microsoft skills'} , 
        { skill: 'keynote presentation'},
        { skills: 'document management'}
      ]
    }
  }
]
 
const handleEmployeeChange = (index) => {
  setSelectedEmployee(index)
}

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const handleFormSubmit = formValues => console.log(formValues);

  return (
    <div className="app">
        <h1>
          Personal Info
        </h1>
        <div className="card-container bg-white">
           <form onSubmit={handleSubmit(handleFormSubmit)}>
             <div className="flex flex-col mb-4">
                <label for="first-name-field" className="text-pink-700 text-sm"> First Name </label>
                <input 
                  type="text" 
                  className="border-b-2 border-pink-500 w-2/6"
                  placeholder="Enter your first name... " {...register("first-name-field", { required: true })}
                />
              </div>
              <div className="flex flex-col mb-4">
                <label for="first-name-field" className="text-pink-700 text-sm"> Last Name </label>
                <input 
                  type="text" 
                  className="border-b-2 border-pink-500 w-2/6"
                  placeholder="Enter your last name... " {...register("last-name-field", { required: true })}/>
              </div>
              <div className="flex flex-col mb-4">
                <label for="first-name-field" className="text-pink-700 text-sm"> Birthdate </label>
                <input 
                 type="date" 
                 className="border-b-2 border-pink-500 w-2/6"
                 placeholder="YYYY-MM-DD" {...register("birthdate-field", { required: true })}
                />
              </div>
   
              <br/>
                <select
                  {...register("sex-field", { required: true })}
                >
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                </select>
              <br/>
              <input 
                 type="number" 
                 placeholder="Enter your age" {...register("age-field", { required: true })}
                />
              <br/>
              <button type="submit">Submit</button>
           </form>
        </div>

    </div>
  );
}

export default App;
