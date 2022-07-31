import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const getUser = (userId) => API.get(`/user/${userId}`);

export const updateUser = (userId, userData) =>
  API.put(`/user/${userId}`, userData);
