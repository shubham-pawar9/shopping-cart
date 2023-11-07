import { useState, useRef } from "react";
import { useEffect } from "react";
import Filter from "./Filter";

const Categories = ({ handleAddToCart, selectCategory, loader }) => {
  const [categories, setCategories] = useState([]);
  const [filterType, setFilterType] = useState("");
  const [categoryType, setCategoryType] = useState("");
  const filterRef = useRef("");
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
      } catch (error) {
        reject(error);
      }
    });
  };
  useEffect(() => {
    fetchData().then((res) => {
      setCategories(res);
    });
    setFilterType("");
    document
      .querySelectorAll(".storage-type")
      .forEach((item) => (item.checked = false));
  }, [selectCategory]);

  useEffect(() => {
    const filteredCategoryTypes = categories
      .filter((val) => selectCategory === val.category)
      .map((val) => val.type);
    setCategoryType([...new Set(filteredCategoryTypes)]);
    filterRef.current.classList.remove("active");
    return () => {
      setCategoryType([]);
    };
  }, [selectCategory, categories]);

  useEffect(() => {
    document.querySelector("#recommanded").checked = true;
  }, [selectCategory]);

  const handleSortBy = (value) => {
    filterRef.current.classList.remove("active");
    switch (value) {
      case "lowToHigh":
        setCategories(
          categories
            .filter((val) => selectCategory === val.category)
            .sort((a, b) => a.price - b.price)
        );
        document.querySelectorAll(`#${value}`).checked = true;
        break;
      case "highToLow":
        setCategories(
          categories
            .filter((val) => selectCategory === val.category)
            .sort((a, b) => b.price - a.price)
        );
        document.querySelectorAll(`#${value}`).checked = true;
        break;
      case "recommanded":
        setCategories(
          categories
            .filter((val) => selectCategory === val.category)
            .sort((a, b) => a.id - b.id)
        );
        document.querySelectorAll(`#${value}`).checked = true;
        break;
    }
  };

  return (
    <>
      <div className="categories">
        {categories &&
          categories.map((item, index) => {
            if (
              (selectCategory == item.category && filterType == "") ||
              filterType === item.type
            ) {
              return (
                <div key={index} className="card" id={`data${item.id}`}>
                  <div className="item-image-div">
                    <img
                      className="cart-select"
                      src={process.env.PUBLIC_URL + "/images/cart-select.png"}
                      alt="cart-select"
                    />
                    {loader ? (
                      <img
                        className="loader-image"
                        src={process.env.PUBLIC_URL + `/images/loading.gif`}
                        alt="item image"
                      />
                    ) : (
                      <img
                        className="cart-image"
                        src={
                          process.env.PUBLIC_URL +
                          `/images/adds/${item.category}/${item.id}.png`
                        }
                        alt="item image"
                      />
                    )}
                  </div>
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
            }
          })}
        <Filter
          selectCategory={selectCategory}
          categories={categories}
          handleSortBy={handleSortBy}
          setFilterType={setFilterType}
          categoryType={categoryType}
          filterRef={filterRef}
        />
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
