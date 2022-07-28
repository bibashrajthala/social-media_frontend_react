import React from "react";

import { TrendsData } from "../../Data/TrendsData";

import "./Trends.scss";
const Trends = () => {
  return (
    <div className="trends">
      <div className="trends__card">
        <h3 className="trends__card-heading">Trends for you</h3>

        {TrendsData.map((trend, index) => (
          <div className="trends__card-trend" key={index}>
            <span className="trend-name">#{trend.name}</span>
            <span className="trend-shares">{trend.shares}K shares</span>
          </div>
        ))}
      </div>

      <button className="button trends__button">Share</button>
    </div>
  );
};

export default Trends;
