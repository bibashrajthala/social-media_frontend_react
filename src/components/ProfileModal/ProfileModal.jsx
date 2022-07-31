import { useState } from "react";
import { Modal, useMantineTheme } from "@mantine/core";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { uploadImage } from "../../actions/UploadActions";
import { updateUser } from "../../actions/UserActions";

import "./profileModal.scss";

function ProfileModal({ isProfileModalOpen, setIsProfileModalOpen, data }) {
  const dispatch = useDispatch();
  const param = useParams();
  const theme = useMantineTheme();

  const { password, ...otherData } = data;

  const [formData, setFormData] = useState(otherData);
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onImageChangeHandler = (e) => {
    if (e.target?.files?.[0]) {
      let img = e.target.files[0];

      if (e.target.name === "profilePicture") {
        setProfileImage(img);
      }
      if (e.target.name === "coverPicture") {
        setCoverImage(img);
      }
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formData);

    let UserData = formData;
    // if user also update profile picture
    if (profileImage) {
      const data = new FormData();
      const fileName = Date.now() + profileImage.name;
      data.append("name", fileName);
      data.append("file", profileImage);
      UserData.profilePicture = fileName;
      try {
        dispatch(uploadImage(data));
      } catch (err) {
        console.log(err);
      }
    }

    // if user also update cover picture
    if (coverImage) {
      const data = new FormData();
      const fileName = Date.now() + coverImage.name;
      data.append("name", fileName);
      data.append("file", coverImage);
      UserData.coverPicture = fileName;
      try {
        dispatch(uploadImage(data));
      } catch (err) {
        console.log(err);
      }
    }

    dispatch(updateUser(param.id, UserData));
    setIsProfileModalOpen(false);
  };

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
      <form className="profile-modal" onSubmit={onSubmitHandler}>
        <h3 className="profile-modal__heading">Your Info</h3>

        {/* name prop should be a/c to UserModal of backend */}
        <div className="profile-modal__inputs">
          <div className="input-names">
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              onChange={onChangeHandler}
              value={formData.firstName}
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              onChange={onChangeHandler}
              value={formData.lastName}
            />
          </div>
          <div className="input-workplace">
            <input
              type="text"
              placeholder="Works at"
              name="worksAt"
              onChange={onChangeHandler}
              value={formData.worksAt}
            />
          </div>
          <div className="input-address">
            <input
              type="text"
              placeholder="Lives in"
              name="livesIn"
              onChange={onChangeHandler}
              value={formData.livesIn}
            />
            <input
              type="text"
              placeholder="Country"
              name="country"
              onChange={onChangeHandler}
              value={formData.country}
            />
          </div>
          <div className="input-status">
            <input
              type="text"
              placeholder="Relationship status"
              name="relationship"
              onChange={onChangeHandler}
              value={formData.relationship}
            />
          </div>
          <div className="input-images">
            <div>
              <label htmlFor="profile-image">Profile Image</label>
              <input
                type="file"
                name="profilePicture"
                id="profile-image"
                onChange={onImageChangeHandler}
              />
            </div>

            <div>
              <label htmlFor="cover-image">Cover Image</label>
              <input
                type="file"
                name="coverPicture"
                id="cover-image"
                onChange={onImageChangeHandler}
              />
            </div>
          </div>
        </div>

        <button type="submit" className="button profile-modal__button">
          Update
        </button>
      </form>
    </Modal>
  );
}

export default ProfileModal;
