const MainLoader = () => {
  return (
    <>
      <div className="mainLoad">
        <img
          className="mainLoad-img"
          src={process.env.PUBLIC_URL + "/images/mainLoader.gif"}
          alt="loading"
        />
      </div>
    </>
  );
};
export default MainLoader;
