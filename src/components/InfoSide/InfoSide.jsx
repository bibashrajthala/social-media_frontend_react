import React from "react";

import LogoAndSearchField from "../LogoAndSearchField/LogoAndSearchField";
import InfoCard from "../InfoCard/InfoCard";
import FollowersCard from "../FollowersCard/FollowersCard";

import "./infoSide.scss";

const InfoSide = () => {
  return (
    <div className="info-side">
      <LogoAndSearchField />
      <InfoCard />
      <FollowersCard />
    </div>
  );
};

export default InfoSide;
