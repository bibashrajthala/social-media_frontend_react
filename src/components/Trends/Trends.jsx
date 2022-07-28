import React, { useState } from "react";

import { TrendsData } from "../../Data/TrendsData";

import ShareModal from "../ShareModal/ShareModal";

import "./Trends.scss";
const Trends = () => {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const openShareModalHandler = () => setIsShareModalOpen(true);
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

      <button className="button trends__button" onClick={openShareModalHandler}>
        Share
      </button>
      <ShareModal
        isShareModalOpen={isShareModalOpen}
        setIsShareModalOpen={setIsShareModalOpen}
      />
    </div>
  );
};

export default Trends;
