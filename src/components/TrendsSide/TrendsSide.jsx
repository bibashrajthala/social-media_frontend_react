import React from "react";

import Navigation from "../Navigation/Navigation";
import Trends from "../Trends/Trends";

import "./trendsSide.scss";

const TrendsSide = () => {
  return (
    <div className="trends-side">
      <Navigation />
      <Trends />
    </div>
  );
};

export default TrendsSide;
