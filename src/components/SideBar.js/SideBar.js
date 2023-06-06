import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Sidebar.css";
import { AiOutlineClose } from "react-icons/ai";
import { turnSidebarOff } from "../../rtk/slices/sidebarSlice";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../utils/apiURL";
import { AiOutlineSearch } from "react-icons/ai";

function SideBar() {
  const sidebar = useSelector((state) => state.sidebar.turnOn);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const [cat, setCat] = useState([]);
  useEffect(() => {
    fetch(`${BASE_URL}/products/categories`)
      .then((res) => res.json())
      .then((data) => setCat(data));
  }, []);

  const handleSearchterm = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

  return (
    <div className={`sidebar ${sidebar ? "hide-sidebar" : ""}`}>
      <div className="container">
        <div className="sidebar-title">
          <h3>All Categories</h3>
          <AiOutlineClose
            onClick={() => dispatch(turnSidebarOff())}
            className="close-icon"
          />
        </div>
        <div className="sidebar-search">
          <input
            className="search"
            placeholder="Serch..."
            onChange={(e) => handleSearchterm(e)}
          />
          <div
            className="search-btn"
            onClick={() => dispatch(turnSidebarOff())}
          >
            <Link to={`search/${searchTerm}`}>
              <button>
                <AiOutlineSearch className="icon" />
              </button>
            </Link>
          </div>
        </div>
        <div className="sidebar-links">
          <ul className="links-list">
            {cat.map((category, index) => {
              return (
                <Link
                  onClick={() => dispatch(turnSidebarOff())}
                  key={index}
                  to={`category/${category}`}
                  className="links"
                >
                  <li className="link">{category}</li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
