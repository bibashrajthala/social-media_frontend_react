import React from "react";

import LogoAndSearchField from "../LogoAndSearchField/LogoAndSearchField";
import ProfileCard from "../ProfileCard/ProfileCard";
import FollowersCard from "../FollowersCard/FollowersCard";

import "./profileSide.scss";

const ProfileSide = () => {
  return (
    <div className="profile-side">
      <LogoAndSearchField />
      <ProfileCard page="home" />
      <FollowersCard />
    </div>
  );
};

export default ProfileSide;
