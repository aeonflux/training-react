import "./EmployeeView.css";

const EmployeeView = ({ personalInfo, payroll, benefits, qualifications }) => {
  return (
    <>
      <div className="flex justify-center">
        <div className="container">
          <div className="column">
            <h1 className="column-label">Personal Info</h1>
            <p>First Name = {personalInfo.firstName}</p>
            <p>Last Name = {personalInfo.lastName}</p>
            <p>Birthdate = {personalInfo.birthday}</p>
            <p>Sex = {personalInfo.birthday}</p>
            <p>Age = {personalInfo.age}</p>
            <p>Nickname = {personalInfo.nickname}</p>
          </div>
          <div className="column">
            <h1 className="column-label">Benefits</h1>
            <div className="column-entry-label">
              SSS
              <span className="column-entry-value">
                {benefits.sss ? ` YES ` : ` NO `}
              </span>
            </div>
            <div className="column-entry-label">
              Pagibig
              <span className="column-entry-value">
                {benefits.pagibig ? ` YES ` : ` NO `}
              </span>
            </div>
            <div className="column-entry-label">
              Philhealth
              <span className="column-entry-value">
                {benefits.philhealth ? ` YES ` : ` NO `}
              </span>
            </div>
            <p>Leaves Available = {benefits.leavesAvailable}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="container">
          <div className="column">
            <h1 className="column-label">Payroll</h1>
            <p>
              {`Base Salary `}
              <span className="column-entry-value">{payroll.baseSalary}</span>
            </p>
            <p>
              {`Hiring Date `}
              <span className="column-entry-value">{payroll.hiringDate}</span>
            </p>
          </div>
          <div className="column">
            <h1 className="column-label">Qualifications</h1>
            <span> Education</span>
            <p>primary = {qualifications.education.primary}</p>
            <p>secondary = {qualifications.education.secondary}</p>
            <p>tertiary = {qualifications.education.tertiary}</p>
            <p>Tech Skills</p>
            <div className="flex">
              {qualifications.techSkills.map((techskill, index) => (
                <div
                  key={index}
                  className="p-1 first-letter:text-center bg-pink-700 text-white rounded-lg m-3"
                >
                  {techskill.skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { EmployeeView };
