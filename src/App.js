import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import Section from "./component/Section";
import Cover from "./component/Cover";
import Categories from "./component/Categories";
import { useEffect, useState } from "react";
import Cart from "./component/Cart";
import Login from "./component/Login";

function App() {
  const [cartStatus, setCartStatus] = useState(false);
  const [cartData, setCartData] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [selectCategory, setSelectCategory] = useState("sofas");
  const [loader, setLoader] = useState(false);
  const [sectionList, setSectionList] = useState([
    "sofas",
    "beds",
    "wardrobe",
    "dining tables",
    "chairs",
    "tv unit",
    "shoe rack",
  ]);
  const [suggestionList, setSuggestionList] = useState([]);
  const [formShow, setFormShow] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    address: "",
  });
  const handleAddToCart = (item, e) => {
    e.target.parentElement.classList.add("active");
    setCartData([...cartData, item]);
  };

  const handleShowCart = () => {
    setCartStatus(true);
    document.querySelector(".categories").classList.add("scroll-off");
  };

  const handleRemoveCartItem = (cartItem) => {
    setCartData(cartData.filter((item) => item.name !== cartItem.name));
    document
      .querySelector(`#data${cartItem["id"]}`)
      ?.classList.remove("active");
  };
  const handleSelectCategory = (e) => {
    setSelectCategory(e.target.id);
    setLoader(true);
    setTimeout(() => {
      cartData.forEach((item) => {
        document.querySelector(`#data${item.id}`)?.classList.add("active");
      });
      setLoader(false);
    }, 500);

    if (document.querySelector(".sectionDiv ul li.active")) {
      document
        .querySelector(".sectionDiv ul li.active")
        .classList.remove("active");
    }
    document
      .querySelector(`.sectionDiv ul li#${e.target.id}`)
      .classList.add("active");
  };

  const handleSearchBar = (value) => {
    setSuggestionList(sectionList.filter((item) => item.includes(value)));
    document.querySelector(".search-list").classList.add("active");
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const updatedFormData = {};
    e.target.childNodes.forEach((item) => {
      item.childNodes.forEach((val) => {
        updatedFormData[val.name] = val.value;
      });
    });
    setFormData(updatedFormData);

    setFormShow(false);
  };

  useEffect(() => {
    const total = cartData.reduce((acc, item) => acc + item.price, 0);
    setCartTotal(total);
    console.log(formData);
  }, [cartData]);

  return (
    <>
      {formShow && (
        <Login handleFormSubmit={handleFormSubmit} setFormShow={setFormShow} />
      )}
      {!formShow && (
        <>
          <Header
            handleShowCart={handleShowCart}
            cartData={cartData}
            handleSearchBar={handleSearchBar}
            suggestionList={suggestionList}
            handleSelectCategory={handleSelectCategory}
            formData={formData}
          />
          <Section
            setSelectCategory={setSelectCategory}
            handleSelectCategory={handleSelectCategory}
          />
          <Categories
            handleAddToCart={handleAddToCart}
            selectCategory={selectCategory}
            loader={loader}
            setSelectCategory={setSelectCategory}
          />
        </>
      )}
      {cartStatus && cartData && (
        <Cart
          cartData={cartData}
          setCartStatus={setCartStatus}
          cartTotal={cartTotal}
          handleRemoveCartItem={handleRemoveCartItem}
        />
      )}
    </>
  );
}

export default App;
