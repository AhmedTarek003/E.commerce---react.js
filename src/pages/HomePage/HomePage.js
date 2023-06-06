import React, { useEffect } from "react";
import HeaderSlider from "../../components/Slider/HeaderSlider";
import { useDispatch, useSelector } from "react-redux";
import {
  fetechProducts,
  getAllProducts,
  getPorductsStatus,
} from "../../rtk/slices/productSlice";
import "./Homepage.css";
import { STATUS } from "../../utils/status";
import Loader from "../../components/Loader/Loader";
import ProductList from "../../components/ProductList/ProductList";
import { categoryfetch, getAllCategory } from "../../rtk/slices/categorySlice";
import "aos/dist/aos.css";
import Aos from "aos";

function HomePage() {
  const products = useSelector(getAllProducts);
  const productsStatus = useSelector(getPorductsStatus);
  const dispatch = useDispatch();

  const category = useSelector(getAllCategory);

  useEffect(() => {
    dispatch(fetechProducts(50));
    dispatch(categoryfetch());
    Aos.init({ duration: 2000 });
    Aos.init({ once: true });
  }, [dispatch]);

  const categoryOne =
    products && products.filter((pro) => pro.category === category[0]);
  const categoryTwo =
    products && products.filter((pro) => pro.category === category[1]);
  const categoryThree =
    products && products.filter((pro) => pro.category === category[2]);
  const categoryFour =
    products && products.filter((pro) => pro.category === category[3]);

  return (
    <div className="home-page">
      <HeaderSlider />
      <div className="container">
        <div className="out-products">See Our Products</div>
        <div className="content">
          {productsStatus === STATUS.LOADING ? (
            <Loader />
          ) : (
            <div data-aos="fade-up">
              <ProductList products={products} />
            </div>
          )}
        </div>
        <div className="out-products">{category[0]}</div>
        <div className="content">
          {productsStatus === STATUS.LOADING ? (
            <Loader />
          ) : (
            <div data-aos="fade-up">
              <ProductList products={categoryOne} />
            </div>
          )}
        </div>
        <div className="out-products">{category[1]}</div>
        <div className="content">
          {productsStatus === STATUS.LOADING ? (
            <Loader />
          ) : (
            <div data-aos="fade-up">
              <ProductList products={categoryTwo} />
            </div>
          )}
        </div>
        <div className="out-products">{category[2]}</div>
        <div className="content">
          {productsStatus === STATUS.LOADING ? (
            <Loader />
          ) : (
            <div data-aos="fade-up">
              <ProductList products={categoryThree} />
            </div>
          )}
        </div>
        <div className="out-products">{category[3]}</div>
        <div className="content">
          {productsStatus === STATUS.LOADING ? (
            <Loader />
          ) : (
            <div data-aos="fade-up">
              <ProductList products={categoryFour} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
