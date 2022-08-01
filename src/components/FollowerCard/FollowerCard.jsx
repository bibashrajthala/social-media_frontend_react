import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { followUser, unfollowUser } from "../../actions/UserActions";

import "./followerCard.scss";

const FollowerCard = ({ person }) => {
  const navigate = useNavigate();
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

  const followerNaviateHandler = () => {
    navigate(`/profile/${person._id}`);
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
      <div
        className="follower-card__names-container"
        onClick={followerNaviateHandler}
      >
        <span className="follower-card-name">{firstName}</span>
        <span className="follower-card-username">{username}</span>
      </div>
      <button
        className={
          following ? "button unfollow-btn" : "button follower-card__button"
        }
        onClick={followHandler}
      >
        {following ? "Unfollow" : "Follow"}
      </button>
    </div>
  );
};

export default FollowerCard;
