import React from "react";

import { MdHome, MdSettings, MdNotifications, MdChat } from "react-icons/md";

import "./navigation.scss";

const Navigation = () => {
  return (
    <div className="navigation">
      <MdHome />
      <MdSettings />
      <MdNotifications />
      <MdChat />
    </div>
  );
};

export default Navigation;
