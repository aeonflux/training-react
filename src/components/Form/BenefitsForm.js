import "./Form.css";

const BenefitsForm = ({ register, onSubmit, errors, onNext }) => {
  return (
    <div className="flex-box">
      <form onSubmit={onSubmit}>
        <div className="flex ml-20">
          <div className="form-fields">
            <label className="block relative mb-3">
              SSS
              <input type="checkbox"></input>
              <span className=" absolute h-6 w-6 text-pink-500"></span>
            </label>
            <label className="block relative mb-3">
              Philhealth
              <input type="checkbox"></input>
              <span className=""></span>
            </label>
            <label className="block relative mb-3">
              PAGIBIG
              <input type="checkbox"></input>
              <span className=""></span>
            </label>
          </div>

          <div className="form-fields">
            <label htmlFor="leavecredits-field" className="form-label ">
              Leave Credits
            </label>
            <input
              type="number"
              className="border-pink-500 border-b-2 block-type"
              {...register("leaveCredits-field", { required: true })}
            />
            {errors.leaveCredits && <p>{errors.leaveCredits.message}</p>}
          </div>
        </div>
        <button className="" type="submit" onClick={onNext}>
          Next
        </button>
      </form>
    </div>
  );
};

export default BenefitsForm;
