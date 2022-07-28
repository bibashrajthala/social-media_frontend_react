import React from "react";

import ProfileSide from "../../components/ProfileSide/ProfileSide";
import PostSide from "../../components/PostSide/PostSide";

import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <ProfileSide />
      <PostSide />
      <span>trends side</span>
    </div>
  );
};

export default Home;
