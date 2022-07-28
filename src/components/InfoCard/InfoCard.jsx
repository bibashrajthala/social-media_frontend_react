import React from "react";

import { MdEdit } from "react-icons/md";

import "./infoCard.scss";

const Info = () => {
  return (
    <div className="info-card">
      <div className="info-card__heading">
        <h3>Your info</h3>
        <MdEdit />
      </div>

      <div className="info-card__infos">
        <div className="info">
          <span>
            <b>Status</b>
          </span>{" "}
          <span>in Relationship</span>
        </div>
        <div className="info">
          <span>
            <b>Lives in</b>
          </span>{" "}
          <span>Bhaktapur</span>
        </div>
        <div className="info">
          <span>
            <b>Works at</b>
          </span>{" "}
          <span>Software Company Ltd</span>
        </div>
      </div>

      <button className="button info-card__button">Logout</button>
    </div>
  );
};

export default Info;
