import React from "react";

import Navigation from "../Navigation/Navigation";
import Trends from "../Trends/Trends";

import "./trendsSide.scss";

const TrendsSide = ({ page }) => {
  return (
    <div className="trends-side">
      <Navigation page={page} />
      <Trends />
    </div>
  );
};

export default TrendsSide;
