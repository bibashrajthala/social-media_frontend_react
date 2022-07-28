import React from "react";

import InfoSide from "../../components/InfoSide/InfoSide";
import ProfileAndPostSide from "../../components/ProfileAndPostSide/ProfileAndPostSide";
import TrendsSide from "../../components/TrendsSide/TrendsSide";

import "./profile.scss";

const Profile = () => {
  return (
    <div className="profile">
      <InfoSide />
      <ProfileAndPostSide />
      <TrendsSide />
    </div>
  );
};

export default Profile;
