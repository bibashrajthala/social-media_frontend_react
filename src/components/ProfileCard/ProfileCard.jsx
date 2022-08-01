import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import FollowModal from "../FollowModal/FollowModal";
import * as UserAPI from "../../api/UserRequests";

import "./profileCard.scss";

const ProfileCard = ({ page }) => {
  const params = useParams();
  const { user } = useSelector((state) => state.authReducer.authData);
  const [profileUser, setProfileUser] = useState(user);
  const posts = useSelector((state) => state.uploadAndPostsReducer.posts);

  const profileUserId = params.id;

  useEffect(() => {
    if (profileUserId) {
      const fetchProfileUser = async () => {
        const { data } = await UserAPI.getUser(profileUserId);
        // console.log(data);
        if (profileUserId === user._id) {
          setProfileUser(user); // current user(user logged in)'s profile
        } else {
          setProfileUser(data); // other user's profile
          // console.log(data);
        }
      };
      fetchProfileUser();
      // console.log(profileUser)
    }
  }, [profileUserId, user]);

  // first alphabet capitalize
  const firstName =
    profileUser.firstName[0].toUpperCase() + profileUser.firstName.slice(1);
  const lastName =
    profileUser.lastName[0].toUpperCase() + profileUser.lastName.slice(1);

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
            profileUser.coverPicture
              ? serverPublicFolder + profileUser.coverPicture
              : serverPublicFolder + "defaultCover.jpg"
          }
          alt="Cover_Photo"
          className="cover-photo"
        />
        <div className="profile-photo-container">
          <img
            src={
              profileUser.profilePicture
                ? serverPublicFolder + profileUser.profilePicture
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
              : user._id === profileUserId
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
          user={profileUser}
        />

        {page === "profile" && (
          <>
            <div className="vl"></div>

            <div className="profile-follow">
              <span className="profile-follow-number">
                {posts.filter((post) => post.userId === profileUser._id).length}
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
