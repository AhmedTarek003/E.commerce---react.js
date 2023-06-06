import React from "react";
import { Col } from "react-bootstrap";
import "./Products.css";
import { Link } from "react-router-dom";

function Product({ product }) {
  return (
    <Col lg="2" sm="10" xs="10" md="4" className="product">
      <Link to={`../products/${product.id}`} className="links">
        <div className="image">
          <img className="photo" src={product.images[0]} alt="" />
        </div>
        <div className="info">
          <div className="product-brand">
            <span>Brand:</span> {product.brand}
          </div>
          <div className="product-title">{product.title}</div>
          <div className="product-price">
            <div className="real-price">
              <del>${product.price}</del>
            </div>
            <div className="discount">
              ${product.discountedPrice.toFixed(2)}
            </div>
            <span className="off">(Off%)</span>
          </div>
        </div>
      </Link>
    </Col>
  );
}

export default Product;
