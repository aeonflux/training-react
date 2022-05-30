import "./EmployeeView.css";

const EmployeeView = ({ personalInfo, payroll, benefits, qualifications }) => {
  return (
    <>
      <div className="container">
        <div className="column">
          <h1>Personal Info</h1>
          <p>First Name = {personalInfo.firstName}</p>
          <p>Last Name = {personalInfo.lastName}</p>
          <p>Birthdate = {personalInfo.birthday}</p>
          <p>Sex = {personalInfo.birthday}</p>
          <p>Age = {personalInfo.age}</p>
          <p>Nickname = {personalInfo.nickname}</p>
        </div>
        <div className="column">
          <h1>Benefits</h1>
          <p>SSS = {benefits.sss ? "YES" : "NO"}</p>
          <p>Pagibig = {benefits.pagibig ? "YES" : "NO"}</p>
          <p>Philhealth = {benefits.philhealth ? "YES" : "NO"}</p>
          <p>Leaves Available = {benefits.leavesAvailable}</p>
        </div>
      </div>

      <div className="container">
        <div className="column">
          <h1>Payroll</h1>
          <p>Base Salary = {payroll.baseSalary}</p>
          <p>Hiring Date = {payroll.hiringDate}</p>
        </div>
        <div className="column">
          <h1>Qualifications</h1>
          <p>
            Education
            <span>primary = {qualifications.education.primary}</span>
            <span>secondary = {qualifications.education.secondary}</span>
            <span>tertiary = {qualifications.education.tertiary}</span>
          </p>
          <div>
            Tech Skills
            {qualifications.techSkills.map((techskill, index) => (
              <div key={index}>{techskill.skill}</div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export { EmployeeView };
