import "./Form.css";

const QualificationForm = ({ register, onSubmit, errors }) => {
  return (
    <div className="flex-box">
      <form onSubmit={onSubmit}>
        <div className="flex ml-20">
          <div className="form-fields">
            <label htmlFor="primaryEducation-field" className="form-label">
              Primary Education
            </label>
            <input
              type="text"
              className="border-pink-500 border-b-2"
              {...register("primaryEducation-field ")}
            />
          </div>

          <div className="form-fields">
            <label htmlFor="tertiaryEducation-field" className="form-label">
              Tertiary Education
            </label>
            <input
              type="text"
              className="border-pink-500 border-b-2"
              {...register("primaryEducation-field ")}
            />
          </div>
        </div>

        <div className="flex ml-20">
          <div className="form-fields">
            <label htmlFor="secondaryEducation-field" className="form-label">
              Secondary Education
            </label>
            <input
              type="text"
              className="border-pink-500 border-b-2"
              {...register("primaryEducation-field ")}
            />
          </div>
          <div className="form-fields">
            <label htmlFor="secondaryEducation-field" className="form-label">
              Tech Skills
            </label>
            <input
              type="text"
              className="border-pink-500 border-b-2"
              {...register("primaryEducation-field ")}
            />
          </div>
        </div>
      </form>
      <button className="">Submit</button>
    </div>
  );
};

export default QualificationForm;
