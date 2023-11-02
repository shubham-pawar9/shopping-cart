import { useState } from "react";
import { useEffect } from "react";

const Categories = ({ handleAddToCart }) => {
  const [categories, setCategories] = useState([]);
  const fetchData = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const apiData = await fetch("categories.json", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        const data = apiData.json();
        resolve(data);
        // console.log(data);
      } catch (error) {
        reject(error);
      }
    });
  };
  useEffect(() => {
    fetchData().then((res) => {
      setCategories(res);
    });
  });
  return (
    <>
      <div className="categories">
        {categories &&
          categories.map((item, index) => {
            return (
              <div key={index} className="card">
                <img
                  className="cart-select"
                  src={process.env.PUBLIC_URL + "/images/cart-select.png"}
                  alt="cart-select"
                />
                <img
                  className="cart-image"
                  src={process.env.PUBLIC_URL + `/images/adds/${item.src}`}
                  alt="item image"
                />
                <span className="name">{item.name}</span>
                <span className="type">{item.type}</span>
                <div className="hrLine"></div>
                <span className="price">Rs .{item.price}</span>
                <div
                  className="addToCart"
                  onClick={(e) => handleAddToCart(item, e)}
                >
                  Add To Cart
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};
export default Categories;
// 3 Seater Sofas
// 2 Seater Sofas
// 1 Seater Sofas
// L Shaped Sofas
// Chesterfield Sofas
// Leather Sofas
// Chaise Lounge
// Office Sofas
// Futons
// Outdoor Sofas
