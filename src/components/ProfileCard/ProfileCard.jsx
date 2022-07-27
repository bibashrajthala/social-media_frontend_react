import React from "react";

import CoverPhoto from "../../assets/cover.jpg";
import ProfilePhoto from "../../assets/profileImg.jpg";

import "./profileCard.scss";

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <div className="photo-container">
        <img src={CoverPhoto} alt="Cover_Photo" className="cover-photo" />
        <div className="profile-photo-container">
          <img
            src={ProfilePhoto}
            alt="Profile_Photo"
            className="profile-photo"
          />
        </div>
      </div>

      <div className="profile-name-container">
        <h2 className="profile-name">Michael Jordan</h2>
        <p className="profile-position">Senior Frontend Developer</p>
      </div>
      <hr />
      <div className="profile-follow-container">
        <div className="profile-follow">
          <span className="profile-follow-number">6,886</span>
          <span className="profile-follow-text">Followers</span>
        </div>
        <div className="vl"></div>
        <div className="profile-follow">
          <span className="profile-follow-number">6,886</span>
          <span className="profile-follow-text">Followers</span>
        </div>
      </div>
      <hr />
      <span className="profile">My Profile</span>
    </div>
  );
};

export default ProfileCard;
