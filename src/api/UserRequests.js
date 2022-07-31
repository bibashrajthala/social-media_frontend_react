import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const getAllUsers = () => API.get("/user");

export const getUser = (userId) => API.get(`/user/${userId}`);

export const updateUser = (userId, userData) =>
  API.put(`/user/${userId}`, userData);

export const followUser = (id, data) => API.put(`/user/${id}/follow`, data); // data is currentUser, id is id of person you want to follow or unfollow

export const unfollowUser = (id, data) => API.put(`/user/${id}/unfollow`, data);
