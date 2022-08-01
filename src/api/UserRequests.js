import axios from "axios";

// const API = axios.create({ baseURL: "http://localhost:5000" });
const API = axios.create({
  baseURL: "https://tweetbook-social-media.herokuapp.com/",
});

// for providing token to server's  middleware for verification from the localStorage as the header's authorization
API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const getAllUsers = () => API.get("/user");

export const getUser = (userId) => API.get(`/user/${userId}`);

export const updateUser = (userId, userData) =>
  API.put(`/user/${userId}`, userData);

export const followUser = (id, data) => API.put(`/user/${id}/follow`, data); // data is currentUser, id is id of person you want to follow or unfollow

export const unfollowUser = (id, data) => API.put(`/user/${id}/unfollow`, data);
