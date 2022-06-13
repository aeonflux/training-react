import "./Form.css";

const PersonalInfoForm = ({ register, onSubmit, errors, onNext }) => {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();
  // const methods = useForm({ mode: "onBlur" });
  // const handlePersonalInfo = (data) => {
  //   console.log(data);
  // };

  // const onSubmit = (data) => console.log(data);
  return (
    <div className="form-box">
      <form onSubmit={onSubmit}>
        <div className="flex ml-20">
          <div className="form-fields">
            <label htmlFor="first-name-field" className="form-label ">
              First Name
            </label>
            <input
              type="text"
              className="border-pink-500 border-b-2 block-type"
              placeholder="Enter your first name"
              {...register("first-name-field ", {
                required: true,
                // required: "Password Required",
                // minLength: { value: 2, message: "Too Short" },
              })}
            />
            {errors.firstName && <p>{errors.firstName.message}</p>}
          </div>

          <div className="form-fields">
            <label htmlFor="last-name-field" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="border-pink-500 border-b-2"
              placeholder="Enter your last name"
              {...register("last-name-field ", { required: true })}
            />
          </div>
        </div>

        <div className="flex ml-20">
          <div className="form-fields">
            <label htmlFor="nickname-field" className="form-label">
              Nickname
            </label>
            <input
              type="text"
              className="border-pink-500 border-b-2"
              placeholder="Enter your last name"
              {...register("nickname-field ")}
            />
          </div>

          <div className="form-fields">
            <label htmlFor="birthdate-field" className="form-label">
              Birthday
            </label>
            <input
              type="date"
              className="border-pink-500 border-b-2"
              placeholder="YYYY-MM-DD"
              {...register("birthdate-field ", { required: true })}
            />
          </div>
        </div>

        <div className="flex ml-20">
          <div className="form-fields">
            <label htmlFor="Sex-field" className="form-label">
              Sex
            </label>
            <select
              className="border-pink-500 border-b-2"
              {...register("sex-field", { required: true })}
            >
              <option></option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
            </select>
          </div>

          <div className="form-fields">
            <label className="form-label">Age</label>
            <input
              className="border-pink-500 border-b-2"
              type="number"
              placeholder="Enter your age"
              {...register("age-field", { required: true })}
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

export default PersonalInfoForm;
