import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { MdEdit } from "react-icons/md";
import ProfileModal from "../ProfileModal/ProfileModal";
import * as UserAPI from "../../api/UserRequests";
import { logout } from "../../actions/AuthActions";

import "./infoCard.scss";

const InfoCard = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const [profileUser, setProfileUser] = useState({});
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  const profileUserId = params.id;

  const { user } = useSelector((state) => {
    // console.log(state.authReducer.authData);
    return state.authReducer.authData;
  });
  // console.log(user);

  useEffect(() => {
    const fetchProfileUser = async () => {
      const { data } = await UserAPI.getUser(profileUserId);
      // console.log(data);
      if (profileUserId === user._id) {
        setProfileUser(user); // current user(user logged in)'s profile
      } else {
        setProfileUser(data); // other user's profile
      }
    };
    fetchProfileUser();
    // console.log(profileUser)
  }, [user]);

  const { relationship, livesIn, worksAt } = profileUser;

  const openProfileModalHandler = () => setIsProfileModalOpen(true);

  const logoutHandler = () => {
    dispatch(logout()); // need to clear the user's data from localStorage and Store when logged out
  };

  return (
    <div className="info-card">
      <div className="info-card__heading">
        <h3>{profileUserId === user._id ? "Your Info" : "Profile Info"}</h3>

        {profileUserId === user._id && (
          <div>
            <MdEdit onClick={openProfileModalHandler} />
            <ProfileModal
              isProfileModalOpen={isProfileModalOpen}
              setIsProfileModalOpen={setIsProfileModalOpen}
              data={user}
            />
            {/* this modal only renders when isProfileModalOpen is true */}
          </div>
        )}
      </div>

      <div className="info-card__infos">
        <div className="info">
          <span>
            <b>Status</b>
          </span>{" "}
          <span>{relationship}</span>
        </div>
        <div className="info">
          <span>
            <b>Lives in</b>
          </span>{" "}
          <span>{livesIn}</span>
        </div>
        <div className="info">
          <span>
            <b>Works at</b>
          </span>{" "}
          <span>{worksAt}</span>
        </div>
      </div>

      <button className="button info-card__button" onClick={logoutHandler}>
        Logout
      </button>
    </div>
  );
};

export default InfoCard;
