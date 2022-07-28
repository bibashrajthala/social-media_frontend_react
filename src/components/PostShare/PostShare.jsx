import React, { useState, useRef } from "react";

import ProfileImg from "../../assets/profileImg.jpg";
import {
  MdInsertPhoto,
  MdVideocam,
  MdLocationOn,
  MdCancel,
} from "react-icons/md";
import { AiFillSchedule } from "react-icons/ai";

import "./postShare.scss";

const PostShare = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();

  const uploadPhotoHandler = () => imageRef.current.click();

  const onImageChangeHandler = (e) => {
    if (e.target?.files?.[0]) {
      let img = e.target.files[0];
      setImage({
        imageUrl: URL.createObjectURL(img),
      });
    }
  };

  const removeImagePreviewHandler = () => setImage(null);

  return (
    <div className="post-share">
      <div className="post-share__profile-image-container">
        <img src={ProfileImg} alt="Profile_image" />
      </div>
      <div className="post-share__options-container">
        <input type="text" placeholder="What's Happening?" />

        <div className="post-share__options">
          <div className="option" onClick={uploadPhotoHandler}>
            <MdInsertPhoto />
            <span className="option__name">Photo</span>
          </div>
          <div className="option">
            <MdVideocam />
            <span className="option__name">Video</span>
          </div>
          <div className="option">
            <MdLocationOn />
            <span className="option__name">Location</span>
          </div>
          <div className="option">
            <AiFillSchedule />
            <span className="option__name">Schedule</span>
          </div>
          <button className="button post-share__button">Share</button>

          <input
            type="file"
            style={{ display: "none" }}
            ref={imageRef}
            name="postImage"
            onChange={onImageChangeHandler}
          />
        </div>
        {image && (
          <div className="preview-image">
            <MdCancel onClick={removeImagePreviewHandler} />
            <img src={image.imageUrl} alt="post_image" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostShare;
