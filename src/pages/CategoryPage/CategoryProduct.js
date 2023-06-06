import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchSingleCategory,
  getCategoryProducts,
  getCategoryProductsStatus,
} from "../../rtk/slices/categorySlice";
import { STATUS } from "../../utils/status";
import Loader from "../../components/Loader/Loader";
import ProductList from "../../components/ProductList/ProductList";
import "./Categoryproduct.css";

function CategoryProduct() {
  const { category } = useParams();
  const dispatch = useDispatch();
  const categoryProduct = useSelector(getCategoryProducts);
  const categoryproductStatus = useSelector(getCategoryProductsStatus);
  useEffect(() => {
    dispatch(fetchSingleCategory(category));
  }, [dispatch, category]);

  return (
    <div className="category-products">
      <div className="container">
        <div className="out-products">See Our {category}</div>
        {categoryproductStatus === STATUS.LOADING ? (
          <Loader />
        ) : (
          <ProductList products={categoryProduct} />
        )}
      </div>
    </div>
  );
}

export default CategoryProduct;
