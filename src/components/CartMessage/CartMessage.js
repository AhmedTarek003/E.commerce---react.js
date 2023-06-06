import React from "react";
import correct from "../../assets/images/correct.png";
import "./Cartmessage.css";

function CartMessage() {
  return (
    <div className="cart-message text-center">
      <div className="cart-message-icon">
        <img className="correct" src={correct} alt="" />
      </div>
      <h6 className="pra text-white fs-14 fw-5">
        An item has been added to your shopping cart
      </h6>
    </div>
  );
}

export default CartMessage;
