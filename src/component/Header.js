import { useState, useEffect } from "react";

const Header = ({
  handleShowCart,
  cartData,
  handleSearchBar,
  suggestionList,
  handleSelectCategory,
  formData,
}) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowDown") {
        setSelectedItemIndex(
          (prevIndex) => (prevIndex + 1) % suggestionList.length
        );
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [suggestionList.length]);

  useEffect(() => {
    const handleDocumentClick = (event) => {
      const searchDiv = document.querySelector(".searchDiv");
      if (!searchDiv.contains(event.target)) {
        document.querySelector(".search-list").classList.remove("active");
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <>
      <div className="header">
        <div className="brandLogo">
          <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="logo" />
        </div>
        <div className="searchDiv">
          <input
            className="searchBar"
            type="search"
            placeholder="Search here"
            onChange={(e) => handleSearchBar(e.target.value)}
          />
          <div className="search-list">
            <ul>
              {suggestionList.map((item) => {
                return (
                  <li
                    id={item.replace(/\s+/g, "")}
                    onClick={(e) => {
                      handleSelectCategory(e);
                    }}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="rightDiv">
          <button className="profileShow">
            {formData.name == "" ? "Profile" : formData.name}
          </button>
          <button className="cartBtn" onClick={handleShowCart}>
            <span className="cartNumber">{cartData.length}</span>
            <img
              src={process.env.PUBLIC_URL + "/images/cart.png"}
              alt="cart-icon"
            />
            <span>CART</span>
          </button>
        </div>
      </div>
    </>
  );
};
export default Header;
