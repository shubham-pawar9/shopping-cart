const Login = ({
  handleFormSubmit,
  setFormShow,
  setMainLoad,
  mainLoad,
  formShow,
  handleSelectCategory,
  setNoteShow,
  handleContentNone,
}) => {
  const handleCloseForm = () => {
    setMainLoad(true);
    setFormShow(false);
    handleSelectCategory("sofas");
    setTimeout(() => {
      setMainLoad(false);
      setFormShow(false);
      setNoteShow(true);
      document.querySelector(".categories").classList.add("scroll-off");
      handleContentNone();
    }, 1000);
  };
  return (
    <>
      <div className="logInDiv">
        <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="logo" />
        <button className="close-form-Btn" onClick={handleCloseForm}>
          <img
            src={process.env.PUBLIC_URL + "/images/close-form.png"}
            alt="close"
          />
        </button>
        <h2 className="logIn-head">Sign Up to view your profile</h2>
        <form
          onSubmit={(e) => {
            handleFormSubmit(e);
          }}
        >
          <div className="gender-checkbox">
            <label>
              <input
                className="formInput-checkbox"
                type="radio"
                name="gender"
                value="mr"
              />
              Mr
            </label>
            <label>
              <input
                className="formInput-checkbox"
                type="radio"
                name="gender"
                value="mrs"
              />
              Mrs
            </label>
          </div>
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
              type="email"
              placeholder="Email"
              name="email"
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
