
import './EmployeeView.css'

const EmployeeView =({ personalInfo, payroll, benefits, qualifications}) => {

    return (
        <>
        <div className="container">
            <div className="column">
                 <h2>Personal Info</h2>
                 {/* Field Label */}
                 <div>First Name - {personalInfo.firstName}</div>
                 <div>Last Name </div>
            </div>
            <div className="column">
                <h2>Benefits</h2>
                <p>Some text..</p>
            </div>
        </div>
        <div className="container">
            <div className="column">
                 <h2>Payroll</h2>
                 {/* Field Label */}
                 <div>First Name </div>
                 <div>Last Name </div>
            </div>
            <div className="column">
                <h2>Qualifications</h2>
                <p>Some text..</p>
            </div>
        </div>
    </>
    )
}

export { EmployeeView }