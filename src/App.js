import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import Section from "./component/Section";
import Cover from "./component/Cover";
import Categories from "./component/Categories";
import { useEffect, useState } from "react";
import Cart from "./component/Cart";

function App() {
  const [cartStatus, setCartStatus] = useState(false);
  const [cartData, setCartData] = useState([]);
  const [cartTotal, setCartTotal] = useState([]);
  const handleAddToCart = (item, e) => {
    console.log(e.target.parentElement);
    e.target.parentElement.classList.add("active");
    setCartData([...cartData, item]);
  };
  const handleShowCart = () => {
    setCartStatus(true);
  };
  useEffect(() => {
    cartData.map((items) => {
      return setCartTotal([...cartTotal, items.price]);
    });
  }, [cartData]);
  return (
    <>
      <Header handleShowCart={handleShowCart} />
      <Section />
      <Categories handleAddToCart={handleAddToCart} />
      {cartStatus && cartData && (
        <Cart
          cartData={cartData}
          setCartStatus={setCartStatus}
          cartTotal={cartTotal}
        />
      )}
    </>
  );
}

export default App;
