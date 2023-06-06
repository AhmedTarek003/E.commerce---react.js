import React, { Fragment } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { turnSidebarOn } from "../../rtk/slices/sidebarSlice";
import { getAllCartsProducts } from "../../rtk/slices/cartSlice";
import { useState } from "react";

function NavBar() {
  const dispatch = useDispatch();
  const cart = useSelector(getAllCartsProducts);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchterm = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

  return (
    <Fragment>
      <div className="brand">
        <div className="brand-icon" onClick={() => dispatch(turnSidebarOn())}>
          <RxHamburgerMenu />
        </div>
        <div className="brand-name">
          <Link to={"/"} style={{ color: "white" }} className="links">
            <span style={{ fontWeight: "600" }}>Snap</span>Up
          </Link>
        </div>
      </div>
      <div className="header-search">
        <input
          className="search-bar"
          type="text"
          placeholder="Search your prefered items here"
          onChange={(e) => handleSearchterm(e)}
        />
        <Link to={`search/${searchTerm}`}>
          <button className="search-btn">
            <AiOutlineSearch className="search-icon" />
          </button>
        </Link>
      </div>
      <div className="cart">
        <Link style={{ color: "white" }} className="links" to={"/cart"}>
          <FaShoppingCart className="cart-icon" />
          {cart.length < 1 ? (
            ""
          ) : (
            <span className="cart-market">{cart.length}</span>
          )}
        </Link>
      </div>
    </Fragment>
  );
}

export default NavBar;
