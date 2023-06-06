import React from "react";
import "./Loader.css";
import loader from "../../assets/images/loader.svg";

function Loader() {
  return (
    <div className="loader">
      <div className="container">
        <div className="load-content">
          <img src={loader} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Loader;
