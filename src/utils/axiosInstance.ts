// utils/axios.js

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL, // Thay thế bằng URL của API của bạn
  headers: {
    "Content-Type": "application/json",
  },
});
console.log("url", import.meta.env.VITE_SERVER_URL);
export default axiosInstance;
