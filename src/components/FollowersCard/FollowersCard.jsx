import React from "react";

import { Followers } from "../../Data/FollowersData";

import FollowerCard from "../FollowerCard/FollowerCard";

import "./FollowersCard.scss";

const FollowersCard = () => {
  return (
    <div className="followers-card">
      <h3 className="followers-card__heading">Who is following you</h3>

      <div className="follower-card-container">
        {Followers.map((follower) => (
          <FollowerCard follower={follower} />
        ))}
      </div>
    </div>
  );
};

export default FollowersCard;
