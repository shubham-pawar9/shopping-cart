const Header = ({ handleShowCart }) => {
  return (
    <>
      <div className="header">
        <div className="brandLogo">
          <img src="" alt="logo" />
        </div>
        <div className="searchDiv">
          <input
            className="searchBar"
            type="search"
            placeholder="Search here"
          />
          <button className="searchSubmit">Submit</button>
        </div>
        <div className="rightDiv">
          <button className="profileShow">Profile</button>
          <button className="cartBtn" onClick={handleShowCart}>
            CART
          </button>
        </div>
      </div>
    </>
  );
};
export default Header;
