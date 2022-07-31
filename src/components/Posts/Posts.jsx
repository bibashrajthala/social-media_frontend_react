import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { getTimelinePosts } from "../../actions/PostsAction";
import Post from "../Post/Post";

import "./Posts.scss";

const Posts = () => {
  const params = useParams();
  const dispatch = useDispatch();
  //get all posts
  let { posts, loading } = useSelector((state) => state.uploadAndPostsReducer);

  const { user } = useSelector((state) => state.authReducer.authData);
  useEffect(() => {
    dispatch(getTimelinePosts(user._id));
  }, []);

  // filter out timeline posts if you are in profile page ie if url have user id
  if (!posts) return "No Posts";
  if (params.id) posts = posts.filter((post) => post.userId === params.id);

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
