import React from "react";

import { PostsData } from "../../Data/PostsData";

import Post from "../Post/Post";

import "./Posts.scss";

const Posts = () => {
  return (
    <div className="posts">
      {PostsData.map((post, index) => (
        <Post post={post} key={index} />
      ))}
    </div>
  );
};

export default Posts;
