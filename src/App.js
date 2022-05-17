import logo from './logo.svg';
import './App.css';
import { EmployeeCard } from './components/EmployeeCard';

function App() {

  const employeeData = [{
    name: "Danioa Mendez",
    jobTitle: "HR Professional",
    department: 'Human Resources'
  },
  {
    name: "Toni Carpio",
    jobTitle: "Software Engineer",
    department: 'Engineering'
  },
  {
    name: "Ethyl",
    jobTitle: "Software Engineer",
    department: 'Engineering'
  }
]

const selection = 2;


  return (
    <div className="App">
        <h1>
          Ethyl's Employee Database
        </h1>
        <div className="card-container">
            {
              employeeData.map((employee)=>{
                return(
                  <EmployeeCard
                    name={employee.name}
                    jobTitle={employee.jobTitle}
                    department={employee.department}
                  />
                )})
            }
        </div>
        {/* 
           LOGIC evaluation
           AND   && 

           T && T = T
           T && F = F
           F && T = F
           F && F = F
        
        */}
        {
            selection === 1 && <div className="selection"> THIS IS FOR SELECTION 1 - Danica ONLY </div>
        }
        {
            selection === 2 && <div className="selection"> THIS IS FOR SELECTION 2 - Toni ONLY </div>
        }
        {
            selection === 3 && <div className="selection"> THIS IS FOR SELECTION 3 - Ethyl ONLY </div>
        }
    </div>
  );
}

export default App;
