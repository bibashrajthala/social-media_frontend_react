import React from "react";
import { Link } from "react-router-dom";

import { MdHome, MdSettings, MdNotifications, MdChat } from "react-icons/md";

import "./navigation.scss";

const Navigation = ({ page }) => {
  return (
    <div className="navigation">
      <Link to={page === "home" ? "/home" : "/../home"}>
        <MdHome style={{ color: page === "home" ? "orange" : "initial" }} />
      </Link>

      <MdSettings />
      <MdNotifications />
      <MdChat />
    </div>
  );
};

export default Navigation;
