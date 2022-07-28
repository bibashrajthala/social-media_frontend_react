import { Modal, useMantineTheme } from "@mantine/core";

import "./profileModal.scss";

function ProfileModal({ isProfileModalOpen, setIsProfileModalOpen }) {
  const theme = useMantineTheme();

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
      opened={isProfileModalOpen} // this modal only opens when isProfileModalOpen is true
      onClose={() => setIsProfileModalOpen(false)} // while closing this modal (when close button is clicked) , set isProfileModalOpen to false
    >
      {/* Modal content */}
      <form className="profile-modal">
        <h3 className="profile-modal__heading">Your Info</h3>

        <div className="profile-modal__inputs">
          <div className="input-names">
            <input type="text" placeholder="First Name" name="firstname" />
            <input type="text" placeholder="Last Name" name="lastname" />
          </div>
          <div className="input-workplace">
            <input type="text" placeholder="Works at" name="worksAt" />
          </div>
          <div className="input-address">
            <input type="text" placeholder="Lives in" name="livesIn" />
            <input type="text" placeholder="Country" name="country" />
          </div>
          <div className="input-status">
            <input
              type="text"
              placeholder="Relationship status"
              name="relationshipStatus"
            />
          </div>
          <div className="input-images">
            <div>
              <label htmlFor="profile-image">Profile Image</label>
              <input type="file" name="profileImage" id="profile-image" />
            </div>

            <div>
              <label htmlFor="cover-image">Cover Image</label>
              <input type="file" name="coverImage" id="cover-image" />
            </div>
          </div>
        </div>

        <button className="button profile-modal__button">Update</button>
      </form>
    </Modal>
  );
}

export default ProfileModal;
