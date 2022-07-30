import React from "react";
import { useSelector } from "react-redux";
import Post from "../Post/Post";

import "./Posts.scss";

const Posts = () => {
  const { posts, loading } = useSelector((state) => state.uploadPostReducer); //get all posts uploaded by current user(user logged in currently)
  // console.log(posts);
  return (
    <div className="posts">
      {loading
        ? "please wait... Loading..."
        : posts.map((post, index) => <Post post={post} key={index} />)}
    </div>
  );
};

export default Posts;
