import React from "react";

import "./followerCard.scss";

const FollowerCard = ({ follower }) => {
  const { name, username, img } = follower;
  return (
    <div className="follower-card">
      <div className="follower-card__image-container">
        <img
          src={img}
          alt={`${username}_image`}
          className="follower-card-image"
        />
      </div>
      <div className="follower-card__names-container">
        <span className="follower-card-name">{name}</span>
        <span className="follower-card-username">@{username}</span>
      </div>
      <button className="button follower-card__button">Follow</button>
    </div>
  );
};

export default FollowerCard;
