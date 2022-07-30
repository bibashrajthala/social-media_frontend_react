import React, { useState } from "react";

import LikeImg from "../../assets/like.png";
import NotLikeImg from "../../assets/notlike.png";
import CommentImg from "../../assets/comment.png";
import ShareImg from "../../assets/share.png";

import "./Post.scss";
import { useSelector } from "react-redux";

const Post = ({ post }) => {
  const { user } = useSelector((state) => state.authReducer.authData);

  const { image, desc } = post;

  const [liked, setLiked] = useState(post.likes.includes(user._id));
  const [likes, setLikes] = useState(post.likes.length);

  const handleLikeandUnlike = () => {
    liked ? setLikes(likes - 1) : setLikes(likes + 1);
    setLiked(!liked);
  };

  return (
    <div className="post">
      <div className="post__image-container">
        <img
          src={image ? process.env.REACT_APP_PUBLIC_FOLDER + image : ""} // if we have image display it otherwise dont display so src ""
          alt=""
        />
      </div>
      <div className="post__icons-container">
        <img
          src={liked ? LikeImg : NotLikeImg}
          alt=""
          onClick={handleLikeandUnlike}
        />
        <img src={CommentImg} alt="" />
        <img src={ShareImg} alt="" />
      </div>
      <span className="post__likes">{likes} likes</span>

      <div className="post__details">
        <span>
          <b>{user.name}</b> <span>{desc}</span>
        </span>
      </div>
    </div>
  );
};

export default Post;
