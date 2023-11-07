const Login = ({ handleFormSubmit, setFormShow }) => {
  return (
    <>
      <div className="logInDiv">
        <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="logo" />
        <button className="close-form-Btn" onClick={() => setFormShow(false)}>
          <img
            src={process.env.PUBLIC_URL + "/images/close-Form.png"}
            alt="close"
          />
        </button>
        <h2 className="logIn-head">Sign Up to view your profile</h2>
        <form
          onSubmit={(e) => {
            handleFormSubmit(e);
          }}
        >
          <label>
            <input
              className="formInput"
              type="text"
              placeholder="Name"
              name="name"
            />
          </label>
          <label>
            <input
              className="formInput"
              type="number"
              placeholder="Mobile"
              name="mobile"
            />
          </label>
          <label>
            <input
              className="formInput"
              type="text"
              placeholder="Address"
              name="address"
            />
          </label>
          <input
            className="form-submit-btn"
            type="submit"
            value="Continue"
          ></input>
          {/* <button className="form-submit-btn" onClick={handleFormSubmit}>
            Continue
          </button> */}
        </form>
      </div>
    </>
  );
};
export default Login;
