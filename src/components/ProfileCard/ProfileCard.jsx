import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import FollowModal from "../FollowModal/FollowModal";

import "./profileCard.scss";
import { useState } from "react";

const ProfileCard = ({ page }) => {
  const { id } = useParams();
  const { user } = useSelector((state) => state.authReducer.authData);
  const posts = useSelector((state) => state.uploadAndPostsReducer.posts);

  // first alphabet capitalize
  const firstName = user.firstName[0].toUpperCase() + user.firstName.slice(1);
  const lastName = user.lastName[0].toUpperCase() + user.lastName.slice(1);

  const serverPublicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

  const [isFollowModalOpen, setIsFollowModalOpen] = useState(false);
  const [isFollowingModalOpen, setIsFollowingModalOpen] = useState(false);

  const handleFollowingModal = () => setIsFollowingModalOpen(true);
  const handleFollowModal = () => setIsFollowModalOpen(true);
  return (
    <div className="profile-card">
      <div className="photo-container">
        <img
          src={
            user.coverPicture
              ? serverPublicFolder + user.coverPicture
              : serverPublicFolder + "defaultCover.jpg"
          }
          alt="Cover_Photo"
          className="cover-photo"
        />
        <div className="profile-photo-container">
          <img
            src={
              user.profilePicture
                ? serverPublicFolder + user.profilePicture
                : serverPublicFolder + "defaultProfile.png"
            }
            alt="Profile_Photo"
            className="profile-photo"
          />
        </div>
      </div>

      <div className="profile-name-container">
        <h2 className="profile-name">
          {firstName} {lastName}
        </h2>
        <p className="profile-position">
          {
            // nested if else
            user.worksAt
              ? user.worksAt
              : user._id === id
              ? "Write about yourself"
              : "Nothing to show"
          }
        </p>
      </div>
      <hr />
      <div className="profile-follow-container">
        <div className="profile-follow" onClick={handleFollowingModal}>
          <span className="profile-follow-number">{user.following.length}</span>
          <span className="profile-follow-text">Following</span>
        </div>
        <div className="vl"></div>
        <div className="profile-follow" onClick={handleFollowModal}>
          <span className="profile-follow-number">{user.followers.length}</span>
          <span className="profile-follow-text">Followers</span>
        </div>

        <FollowModal
          isFollowModalOpen={isFollowModalOpen}
          setIsFollowModalOpen={setIsFollowModalOpen}
          isFollowingModalOpen={isFollowingModalOpen}
          setIsFollowingModalOpen={setIsFollowingModalOpen}
          user={user}
        />

        {page === "profile" && (
          <>
            <div className="vl"></div>

            <div className="profile-follow">
              <span className="profile-follow-number">
                {posts.filter((post) => post.userId === user._id).length}
              </span>
              <span className="profile-follow-text">Posts</span>
            </div>
          </>
        )}
      </div>
      <hr />
      {page !== "profile" && (
        <Link
          to={`/profile/${user._id}`}
          style={{ textDecoration: "none", marginBottom: "1rem" }}
        >
          <span className="my-profile">My Profile</span>
        </Link>
      )}
    </div>
  );
};

export default ProfileCard;
