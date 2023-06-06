import React from "react";
import Product from "../Products/Product";
import "./Productlist.css";

function ProductList({ products }) {
  return (
    <div className="product-list">
      {products &&
        products.map((product) => {
          let discountedPrice =
            product.price - (product.price * product.discountPercentage) / 100;
          return (
            <Product
              key={product.id}
              product={{ ...product, discountedPrice }}
            />
          );
        })}
    </div>
  );
}

export default ProductList;
