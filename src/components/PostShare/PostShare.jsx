import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { uploadImage, uploadPost } from "../../actions/UploadActions";

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
  const descRef = useRef();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.authReducer.authData); // get the current user form store, ie the user currenlty logged in ,to use it in out newPost object

  const uploading = useSelector((state) => state.uploadPostReducer.uploading);

  const uploadPhotoHandler = () => imageRef.current.click();

  const onImageChangeHandler = (e) => {
    if (e.target?.files?.[0]) {
      let img = e.target.files[0];
      setImage(img);
    }
  };

  const removeImagePreviewHandler = () => setImage(null);

  const shareHandler = () => {
    // data/post to be posted
    const newPost = {
      userId: user._id,
      desc: descRef.current.value,
    };

    // if there is an image with post
    if (image) {
      const filename = Date.now() + image.name; // uploaded image/files's name will be date+Time+Name

      const data = new FormData(); // create a from data object and append/add name and file key to it having filename and image as values , will use this data to upload our image file ,can see it in payload of network tab while api request is send
      data.append("name", filename);
      data.append("file", image);
      newPost.image = filename; // in image key put filename string ie. name of image

      console.log(newPost, "post");

      try {
        dispatch(uploadImage(data));
      } catch (error) {
        console.log(error);
      }
    }
    dispatch(uploadPost(newPost));
    resetPreview(); // reset the preview of post/image after sharing
  };

  // to reset(clear) the preview of post/image after sharing
  const resetPreview = () => {
    setImage(null);
    descRef.current.value = "";
  };

  return (
    <div className="post-share">
      <div className="post-share__profile-image-container">
        <img src={ProfileImg} alt="Profile_image" />
      </div>
      <div className="post-share__options-container">
        <input
          ref={descRef}
          type="text"
          placeholder="What's Happening?"
          required
        />

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
          <button
            className="button post-share__button"
            onClick={shareHandler}
            disabled={uploading}
          >
            {uploading ? "Uploading..." : "Share"}
          </button>

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
            <img src={URL.createObjectURL(image)} alt="post_image" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostShare;
