import React from "react";

import LikeImg from "../../assets/like.png";
import NotLikeImg from "../../assets/notlike.png";
import CommentImg from "../../assets/comment.png";
import ShareImg from "../../assets/share.png";

import "./Post.scss";

const Post = ({ post }) => {
  const { img, name, desc, likes, liked } = post;
  return (
    <div className="post">
      <div className="post__image-container">
        <img src={img} alt="" />
      </div>
      <div className="post__icons-container">
        <img src={liked ? LikeImg : NotLikeImg} alt="" />
        <img src={CommentImg} alt="" />
        <img src={ShareImg} alt="" />
      </div>
      <span className="post-likes">{likes} likes</span>

      <div className="post__details">
        <span>
          <b>{name}</b> <span>{desc}</span>
        </span>
      </div>
    </div>
  );
};

export default Post;
