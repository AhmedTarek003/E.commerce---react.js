import React from "react";
import "./Header.css";

import { BsFacebook } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillQuestionCircle } from "react-icons/ai";
import NavBar from "../NavBar/NavBar";

function Header() {
  return (
    <div className="cont_header">
      <div className="container">
        <div className="header-top">
          <div className="header-info">
            <li className="info">Seller Center</li>
            <li className="info">Download</li>
            <li className="info">Follow us on</li>
            <li className="info icon">
              <BsFacebook className="face" />
            </li>
            <li className="info icon">
              <AiOutlineInstagram className="insta" />
            </li>
          </div>
          <div className="header-tech">
            <li className="tech icon">
              <AiFillQuestionCircle className="support" />
            </li>
            <li className="tech">Support</li>
            <li className="tech">Regiset</li>
            <li className="tech">Log in</li>
          </div>
        </div>
        <div className="header-bottom">
          <NavBar />
        </div>
      </div>
    </div>
  );
}

export default Header;
