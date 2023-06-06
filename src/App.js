import { Fragment } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CartPage from "./pages/CartPage/CartPage";
import SideBar from "./components/SideBar.js/SideBar";
import CategoryProduct from "./pages/CategoryPage/CategoryProduct";
import ProductSingle from "./pages/ProductsPage/ProductSingle";
import Footer from "./components/Footer/Footer";
import SearchPage from "./pages/SearchPage/SearchPage";

function App() {
  return (
    <div className="App">
      <Fragment>
        <Header />
        <SideBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="category/:category" element={<CategoryProduct />} />
          <Route path="products/:id" element={<ProductSingle />} />
          <Route path="search/:searchTerm" element={<SearchPage />} />
        </Routes>
        <Footer />
      </Fragment>
    </div>
  );
}

export default App;
