import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchProductSingle,
  getProductSingle,
  getProductSingleStatus,
} from "../../rtk/slices/productsingleSlice";
import "./Prodcutsingle.css";

import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { BsFillCartCheckFill } from "react-icons/bs";
import { STATUS } from "../../utils/status";
import Loader from "../../components/Loader/Loader";
import {
  addToCart,
  cartMessageStatus,
  setCartMessageOff,
  setCartMessageOn,
} from "../../rtk/slices/cartSlice";
import CartMessage from "../../components/CartMessage/CartMessage";

function ProductSingle() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const single = useSelector(getProductSingle);
  const singleStatus = useSelector(getProductSingleStatus);
  const [quantity, setQuantity] = useState(1);
  const messageStatus = useSelector(cartMessageStatus);

  useEffect(() => {
    dispatch(fetchProductSingle(id));

    if (messageStatus) {
      setTimeout(() => {
        dispatch(setCartMessageOff());
      }, 2000);
    }
  }, [dispatch, id, messageStatus]);

  let discountedPrice =
    single.price - (single.price * single.discountPercentage) / 100;

  const increase = () => {
    setQuantity((prevpQty) => {
      let tempQty = prevpQty + 1;
      if (tempQty > single.stock) tempQty = single.stock;
      return tempQty;
    });
  };

  const decrease = () => {
    setQuantity((prevpQty) => {
      let tempQty = prevpQty - 1;
      if (tempQty < 1) tempQty = 1;
      return tempQty;
    });
  };

  const addToCartHandler = (product) => {
    let discountedPrice =
      product?.price - product?.price * (product?.discountPercentage / 100);
    let totalPrice = quantity * discountedPrice;

    dispatch(addToCart({ ...product, quantity, discountedPrice, totalPrice }));
    dispatch(setCartMessageOn(true));
  };

  return (
    <div className="product-single">
      <div className="container">
        {singleStatus === STATUS.LOADING ? (
          <Loader />
        ) : (
          <div className="content">
            <div className="thumbnils">
              <div className="image">
                <img
                  className="image-img"
                  src={single.images ? single.images[0] : ""}
                  alt=""
                />
              </div>
              <div className="thums">
                {single.images && single.images[1] ? (
                  <div className="thum-photo">
                    <img src={single.images[1]} alt="" className="thum-img" />
                  </div>
                ) : (
                  ""
                )}
                {single.images && single.images[2] ? (
                  <div className="thum-photo">
                    <img src={single.images[2]} alt="" className="thum-img" />
                  </div>
                ) : (
                  ""
                )}
                {single.images && single.images[3] ? (
                  <div className="thum-photo">
                    <img src={single.images[3]} alt="" className="thum-img" />
                  </div>
                ) : (
                  ""
                )}
                {single.images && single.images[4] ? (
                  <div className="thum-photo">
                    <img src={single.images[4]} alt="" className="thum-img" />
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="info">
              <div className="prod-title">{single.title}</div>
              <div className="prod-descrip">{single.description}</div>
              <div className="details">
                <div className="prod-detail">
                  <span>Rating:</span> {single.rating}
                </div>
                <div className="prod-detail">
                  <span>Brand:</span> {single.brand}
                </div>
                <div className="prod-detail">
                  <span>Category:</span> {single.category}
                </div>
              </div>
              <div className="prod-price">
                <div className="old-price">
                  <del>${single.price}</del> Inclusive of all taxes
                </div>
                <div className="new-price">
                  <div className="cost">${discountedPrice.toFixed(2)}</div>
                  <div className="discount">
                    {single.discountPercentage} OFF
                  </div>
                </div>
              </div>
              <div className="quantity">
                <div className="quan-name">Quantity:</div>
                <div className="box minus" onClick={decrease}>
                  <AiOutlineMinus />
                </div>
                <div className="box num">{quantity}</div>
                <div className="box plus" onClick={increase}>
                  <AiOutlinePlus />
                </div>
              </div>
              <div className="buttons">
                <button
                  className="add-cart"
                  onClick={() => addToCartHandler(single)}
                >
                  <span>
                    <BsFillCartCheckFill className="carticon" />
                  </span>
                  <span>Add To Cart</span>
                </button>
                <button className="buy">Buy Now</button>
              </div>
            </div>
          </div>
        )}
      </div>
      {messageStatus && <CartMessage />}
    </div>
  );
}

export default ProductSingle;
