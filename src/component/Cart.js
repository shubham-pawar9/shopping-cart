import { useEffect, useState } from "react";

const Cart = ({ cartData, setCartStatus, cartTotal }) => {
  console.log(cartTotal);

  const [cartFinal, setCartFinal] = useState(0);
  return (
    <>
      <div className="cartDiv">
        <button className="cartClose" onClick={() => setCartStatus(false)}>
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
                  src={process.env.PUBLIC_URL + `/images/adds/${cartItem.src}`}
                  alt="item image"
                />
                <span className="itemName">{cartItem.name}</span>
                <span className="itemPrice">{cartItem.price}</span>
              </div>
            );
          })
        )}
        {cartTotal.length == 0 ? (
          ""
        ) : (
          <div className="cart-bottom-div">
            <span>Total</span>
            <span>
              {cartTotal.reduce((acc, prev) => {
                return acc + prev;
              })}
            </span>
          </div>
        )}
      </div>
    </>
  );
};
export default Cart;
