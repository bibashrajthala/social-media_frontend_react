import React from "react";

import ProfileSide from "../../components/ProfileSide/ProfileSide";

import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <ProfileSide />
      <span>posts side</span>
      <span>trends side</span>
    </div>
  );
};

export default Home;
