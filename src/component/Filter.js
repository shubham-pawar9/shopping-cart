import { useEffect, useRef, useState } from "react";

const Filter = ({
  selectCategory,
  categories,
  handleSortBy,
  setFilterType,
  categoryType,
  filterRef,
}) => {
  const handleFilterShow = () => {
    filterRef.current.classList.toggle("active");
  };
  const handleResetFilter = () => {
    let element = document.querySelectorAll(".filter-sort input[type=radio]");
    for (var i = 0; i < element.length; i++) {
      element[i].checked = false;
      element[0].checked = true;
    }
  };
  return (
    <>
      <div className="filter-div" ref={filterRef}>
        <button className="filter-Btn" onClick={handleFilterShow}>
          Filter & Sort
        </button>
        <div className="filter-sort">
          <span className="filter-name"> Filter & Sort </span>
          <div className="sort-by filter-list">
            <span className="filter-head">Sort By</span>
            <label>
              <input
                type="radio"
                name="sorting"
                id="recommanded"
                value="recommanded"
                onChange={(e) => handleSortBy(e.target.value)}
              />{" "}
              Recommanded
            </label>

            <label>
              <input
                type="radio"
                name="sorting"
                id="lowToHigh"
                value="lowToHigh"
                onChange={(e) => handleSortBy(e.target.value)}
              />{" "}
              Price (Low to High)
            </label>

            <label>
              <input
                type="radio"
                name="sorting"
                id="highToLow"
                value="highToLow"
                onChange={(e) => handleSortBy(e.target.value)}
              />{" "}
              Price (High to Low)
            </label>
          </div>
          <div className="price-range filter-list">
            <span className="filter-head">PRICE RANGE</span>

            <label>
              <input type="checkbox" /> Under ₹ 19,999
            </label>

            <label>
              <input type="checkbox" /> ₹ 20,000 - ₹ 29,999
            </label>

            <label>
              <input type="checkbox" /> ₹ 30,000 - ₹ 39,999
            </label>
            <label>
              <input type="checkbox" /> Above ₹ 39,999
            </label>
          </div>
          <div className="storage-type filter-list">
            <span className="filter-head">STORAGE TYPE</span>
            {categoryType &&
              categoryType.map((val, index) => {
                return (
                  <label key={index}>
                    <input
                      type="radio"
                      className="storage-type"
                      value={val}
                      name="storage-type"
                      onChange={() => {
                        setFilterType(val);
                        filterRef.current.classList.remove("active");
                        console.log(val);
                      }}
                    />{" "}
                    {val}
                  </label>
                );
              })}
            <button
              className="reset-storage-type"
              onClick={() => {
                setFilterType("");
                handleResetFilter();
                handleSortBy("recommanded");
                filterRef.current.classList.remove("active");
              }}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Filter;
