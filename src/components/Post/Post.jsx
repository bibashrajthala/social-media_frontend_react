import React, { useState } from "react";
import { useSelector } from "react-redux";

import { likeUnlikePost } from "../../api/PostRequests";

import LikeImg from "../../assets/like.png";
import NotLikeImg from "../../assets/notlike.png";
import CommentImg from "../../assets/comment.png";
import ShareImg from "../../assets/share.png";

import "./Post.scss";

const Post = ({ post }) => {
  const { user } = useSelector((state) => state.authReducer.authData);

  const { image, desc } = post;

  const [liked, setLiked] = useState(post.likes.includes(user._id));
  const [likes, setLikes] = useState(post.likes.length);

  const handleLikeandUnlike = async () => {
    await likeUnlikePost(post._id, user._id);
    setLiked((liked) => !liked);
    liked ? setLikes((likes) => likes - 1) : setLikes((likes) => likes + 1);
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
          style={{ cursor: "pointer" }}
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
