import { Modal, useMantineTheme } from "@mantine/core";

import * as UserAPI from "../../api/UserRequests";
import { useState, useEffect } from "react";

import "./followModal.scss";

function FollowModal({
  isFollowModalOpen,
  setIsFollowModalOpen,
  isFollowingModalOpen,
  setIsFollowingModalOpen,
  user,
}) {
  const theme = useMantineTheme();
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchPeople = async () => {
      const { data } = await UserAPI.getAllUsers();
      setPeople(data);
    };
    fetchPeople();
  }, []);

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={isFollowModalOpen || isFollowingModalOpen}
      onClose={() => {
        setIsFollowModalOpen(false);
        setIsFollowingModalOpen(false);
      }}
    >
      {/* Modal content */}

      <div className="follow-modal">
        <h3 className="follow-modal__heading">
          Your {isFollowModalOpen ? "Followers" : "Following"}
        </h3>
        <div className="follow-modal__list">
          {isFollowModalOpen &&
            user.followers.length &&
            user.followers.map((followerId, index) => (
              <div key={index}>
                {people.map((person, index) =>
                  followerId === person._id ? (
                    <div key={person._id + index} className="list-item">
                      <p>
                        {person.firstName} {person.lastName}
                      </p>{" "}
                      <span>{person.username}</span>
                    </div>
                  ) : (
                    <span key={index}></span>
                  )
                )}
              </div>
            ))}

          {isFollowingModalOpen &&
            user.following.length &&
            user.following.map((followerId, index) => (
              <div key={index}>
                {people.map((person, index) =>
                  followerId === person._id ? (
                    <div key={person._id + index} className="list-item">
                      <p>
                        {person.firstName} {person.lastName}
                      </p>{" "}
                      <span>{person.username}</span>
                    </div>
                  ) : (
                    <span key={index}></span>
                  )
                )}
              </div>
            ))}
        </div>
      </div>
    </Modal>
  );
}

export default FollowModal;
