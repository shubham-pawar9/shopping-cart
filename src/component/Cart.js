import { useEffect, useState } from "react";

const Cart = ({ cartData, setCartStatus, cartTotal, handleRemoveCartItem }) => {
  return (
    <>
      <div className="cartDiv">
        <button
          className="cartClose"
          onClick={() => {
            setCartStatus(false);
            document
              .querySelector(".categories")
              .classList.remove("scroll-off");
          }}
        >
          Close
        </button>
        <span>Cart Items</span>

        {cartData.length == 0 ? (
          <div className="emptyCart">Cart Empty</div>
        ) : (
          cartData &&
          cartData.map((cartItem, index) => {
            return (
              <div className="cartItems" key={index}>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    `/images/adds/${cartItem.category}/${cartItem.id}.png`
                  }
                  alt="item image"
                />
                <span className="itemName">{cartItem.name}</span>
                <span className="itemPrice">{cartItem.price}</span>
                <img
                  className="remove-cart-icon"
                  src={process.env.PUBLIC_URL + "/images/remove.png"}
                  onClick={() => handleRemoveCartItem(cartItem)}
                  alt="remove item"
                />
              </div>
            );
          })
        )}
        {cartTotal.length == 0 ? (
          ""
        ) : (
          <div className="cart-bottom-div">
            <span>Total</span>
            <span>{cartTotal}</span>
          </div>
        )}
      </div>
    </>
  );
};
export default Cart;
