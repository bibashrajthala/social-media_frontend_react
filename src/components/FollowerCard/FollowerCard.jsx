import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { followUser, unfollowUser } from "../../actions/UserActions";

import "./followerCard.scss";

const FollowerCard = ({ person }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  const [following, setFollowing] = useState(
    person.followers.includes(user._id) // if that person followes [] already has my id , following = true;
  );
  const { firstName, username } = person;

  const followHandler = () => {
    following
      ? dispatch(unfollowUser(person._id, user))
      : dispatch(followUser(person._id, user));
    setFollowing((prev) => !prev);
  };
  return (
    <div className="follower-card">
      <div className="follower-card__image-container">
        <img
          src={
            person.profilePicture
              ? process.env.REACT_APP_PUBLIC_FOLDER + person.profilePicture
              : process.env.REACT_APP_PUBLIC_FOLDER + "defaultProfile.png"
          }
          alt={`${username}_image`}
          className="follower-card-image"
        />
      </div>
      <div className="follower-card__names-container">
        <span className="follower-card-name">{firstName}</span>
        <span className="follower-card-username">{username}</span>
      </div>
      <button className="button follower-card__button" onClick={followHandler}>
        {following ? "Unfollow" : "Follow"}
      </button>
    </div>
  );
};

export default FollowerCard;
