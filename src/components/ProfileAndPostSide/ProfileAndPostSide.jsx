import React from "react";

import ProfileCard from "../ProfileCard/ProfileCard";
import PostSide from "../PostSide/PostSide";

import "./ProfileAndPostSide.scss";

const ProfileAndPostSide = () => {
  return (
    <div className="profile-posts-container">
      <ProfileCard page="profile" />
      <PostSide />
    </div>
  );
};

export default ProfileAndPostSide;
