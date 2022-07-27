import React from "react";

import Logo from "../../assets/logo.png";
import { BiSearch } from "react-icons/bi";

import "./logoAndSearchField.scss";

const LogoAndSearchField = () => {
  return (
    <div className="logoAndSearchField">
      <div className="logo-container">
        <img src={Logo} alt="logo" className="logo" />
      </div>
      <div className="search-container">
        <input type="text" placeholder="#Explore" />
        <div className="search-icon">
          <BiSearch />
        </div>
      </div>
    </div>
  );
};

export default LogoAndSearchField;
