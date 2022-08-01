import axios from "axios";

// const API = axios.create({ baseURL: "http://localhost:5000" });
const API = axios.create({
  baseURL: "https://tweetbook-social-media.herokuapp.com/",
});

export const uploadImage = (image) => API.post("/upload", image);

export const uploadPost = (post) => API.post("/post", post);
