import "./Form.css";

const PayrollForm = ({ register, onSubmit, errors, onNext }) => {
  return (
    <div className="flex-box ">
      <form onSubmit={onSubmit}>
        <div className="flex ml-20">
          <div className="form-fields">
            <label htmlFor="hiringdate-field" className="form-label ">
              Base Salary
            </label>
            <input
              type="number"
              className="border-pink-500 border-b-2 block-type"
              {...register("BaseSalary-field", { required: true })}
            />
            {errors.baseSalary && <p>{errors.firstName.message}</p>}
          </div>
          <div className="form-fields">
            <label htmlFor="hiringdate-field" className="form-label">
              Hiring Date
            </label>
            <input
              type="date"
              className="border-pink-500 border-b-2"
              placeholder="YYYY-MM-DD"
              {...register("hiringdate-field ", { required: true })}
            />
          </div>
        </div>
        <button className="" type="submit" onClick={onNext}>
          Next
        </button>
      </form>
    </div>
  );
};

export default PayrollForm;
