import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import "./Cartpage.css";
import {
  clearCart,
  getAllCartsProducts,
  getCartTotal,
  removeItem,
  toggleCartQty,
} from "../../rtk/slices/cartSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function CartPage() {
  const cart = useSelector(getAllCartsProducts);
  const { totalAmount } = useSelector((state) => state.cart);
  const toggle = toggleCartQty();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch, toggle]);

  if (cart.length < 1) {
    return (
      <div className="empty-cart">
        <div className="container">
          <div className="empty-content">
            <div className="shopping-empty">Your Shopping Cart is Empty</div>
            <Link to={"/"}>
              <button>Go Shopping Now</button>
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="cart-page">
        <div className="container">
          <div className="cart-content">
            <div className="table">
              <div className="t-head">
                <div className="tr">
                  <div className="th">S.N.</div>
                  <div className="th">Product</div>
                  <div className="th">UnitPrice</div>
                  <div className="th">Quantity</div>
                  <div className="th">Total Price</div>
                  <div className="th">Actions</div>
                </div>
              </div>
              <div className="t-body">
                {cart.map((item, ind) => {
                  let discountedPrice =
                    item.price - (item.price * item.discountPercentage) / 100;
                  return (
                    <div className="tr" key={ind}>
                      <div className="td">{ind + 1}</div>
                      <div className="td">{item.title}</div>
                      <div className="td">${discountedPrice.toFixed(2)}</div>
                      <div className="">
                        <div className="quantity">
                          <span
                            className="box minus"
                            onClick={() =>
                              dispatch(
                                toggleCartQty({ id: item.id, type: "DEC" })
                              )
                            }
                          >
                            <AiOutlineMinus />
                          </span>
                          <span className="box num">{item.quantity}</span>
                          <span
                            className="box plus"
                            onClick={() =>
                              dispatch(
                                toggleCartQty({ id: item.id, type: "INC" })
                              )
                            }
                          >
                            <AiOutlinePlus />
                          </span>
                        </div>
                      </div>
                      <div className="td total">
                        ${item.totalPrice.toFixed(2)}
                      </div>
                      <div
                        onClick={() => dispatch(removeItem(item))}
                        className="td delete"
                      >
                        Delete
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="process">
              <div className="clear-cart" onClick={() => dispatch(clearCart())}>
                <MdDelete className="clear-icon" />
                <span>Clear Cart</span>
              </div>
              <div className="prices">
                <div className="total-prices">
                  Total ({cart.length}) items :{" "}
                  <span className="total-amount">
                    ${totalAmount.toFixed(2)}
                  </span>
                </div>
                <div className="chckout">
                  <button>Check Out</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CartPage;
