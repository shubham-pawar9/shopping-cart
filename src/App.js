import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import Section from "./component/Section";
import Cover from "./component/Cover";
import Categories from "./component/Categories";
import { useEffect, useState } from "react";
import Cart from "./component/Cart";
import Login from "./component/Login";
import Profile from "./component/Profile";
import MainLoader from "./component/MainLoader";

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
    "dining table",
    "chairs",
    "tv unit",
    "shoe rack",
  ]);
  const [suggestionList, setSuggestionList] = useState([]);
  const [formShow, setFormShow] = useState(true);
  const [profileShow, setProfileShow] = useState(false);
  const [formData, setFormData] = useState();
  const [mainLoad, setMainLoad] = useState(false);
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
    setMainLoad(true);
    e.preventDefault();
    const updatedFormData = {};
    e.target.childNodes.forEach((item) => {
      item.childNodes.forEach((val) => {
        if (val.childNodes[0] != undefined) {
          console.log(val.childNodes[0].checked);
          if (val.childNodes[0].checked == true) {
            updatedFormData["gender"] = val.childNodes[0].value;
          } else {
            return;
          }
        } else {
          updatedFormData[val.name] = val.value;
        }
        // console.log(val.childNodes[0]);
      });
    });
    try {
      const serializedFormData = JSON.stringify(updatedFormData);
      localStorage.setItem("formData", serializedFormData);
    } catch (error) {
      // Handle the error appropriately
      console.error("Error while storing data: ", error);
    }
    setFormShow(false);
    handleMainLoad();
  };

  const handleShowProfile = () => {
    setProfileShow(true);
  };
  const handleMainLoad = () => {
    setTimeout(() => {
      setMainLoad(false);
    }, 4000);
  };
  useEffect(() => {
    const total = cartData.reduce((acc, item) => acc + item.price, 0);
    setCartTotal(total);
    const storedData = localStorage.getItem("formData");
    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);
        setFormData(parsedData);
        console.log(parsedData);
        parsedData["name"] != "" ? setFormShow(false) : setFormShow(true);
      } catch (error) {
        console.error("Error while retrieving data: ", error);
      }
    }
  }, [cartData, formShow]);

  return (
    <>
      {formShow && (
        <Login
          handleFormSubmit={handleFormSubmit}
          setFormShow={setFormShow}
          setMainLoad={setMainLoad}
          mainLoad={mainLoad}
          formShow={formShow}
        />
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
            handleShowProfile={handleShowProfile}
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
      {profileShow && (
        <Profile
          formData={formData}
          setFormData={setFormData}
          setProfileShow={setProfileShow}
          setFormShow={setFormShow}
        />
      )}
      {mainLoad && <MainLoader />}
    </>
  );
}

export default App;
