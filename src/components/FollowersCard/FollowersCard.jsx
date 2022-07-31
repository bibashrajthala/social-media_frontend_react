import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import * as UserAPI from "../../api/UserRequests";
import FollowerCard from "../FollowerCard/FollowerCard";

import "./FollowersCard.scss";

const FollowersCard = () => {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    const fetchPeople = async () => {
      const { data } = await UserAPI.getAllUsers();
      setPeople(data);
    };
    fetchPeople();
  }, []);

  const { user } = useSelector((state) => state.authReducer.authData);

  return (
    <div className="followers-card">
      <h3 className="followers-card__heading">People you may know</h3>

      <div className="follower-card-container">
        {people.map(
          (person, index) =>
            person._id !== user._id && (
              <FollowerCard person={person} key={index} />
            )
        )}
      </div>
    </div>
  );
};

export default FollowersCard;
