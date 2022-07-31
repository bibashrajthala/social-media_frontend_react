import React from "react";

import ProfileSide from "../../components/ProfileSide/ProfileSide";
import PostSide from "../../components/PostSide/PostSide";
import TrendsSide from "../../components/TrendsSide/TrendsSide";

import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <ProfileSide />
      <PostSide />
      <TrendsSide page="home" />
    </div>
  );
};

export default Home;
