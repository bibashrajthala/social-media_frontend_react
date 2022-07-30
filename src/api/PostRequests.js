import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const likeUnlikePost = (postId, userId) =>
  API.put(`/post/${postId}/like`, { userId: userId });
