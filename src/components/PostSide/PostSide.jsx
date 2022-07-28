import React from "react";

import PostShare from "../PostShare/PostShare";
import Posts from "../Posts/Posts";

import "./PostSide.scss";

const PostSide = () => {
  return (
    <div className="post-side">
      <PostShare />
      <Posts />
    </div>
  );
};

export default PostSide;
