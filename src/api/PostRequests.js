import axios from "axios";

// const API = axios.create({ baseURL: "http://localhost:5000" });
const API = axios.create({
  baseURL: "https://tweetbook-social-media.herokuapp.com/",
});

export const likeUnlikePost = (postId, userId) =>
  API.put(`/post/${postId}/like`, { userId: userId });

export const getTimelinePosts = (userId) => API.get(`/post/${userId}/timeline`);
