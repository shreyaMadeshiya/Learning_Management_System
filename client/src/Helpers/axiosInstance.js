// import axios from "axios";

// const BASE_URL = "http://localhost:5014/api/v1";

// const axiosInstance = axios.create();

// axiosInstance.defaults.baseURL = BASE_URL;
// axiosInstance.defaults.withCredentials = true;

// export default axiosInstance;

// axiosInstance.js
import axios from "axios";

// ✅ Base URL where your backend is running
const BASE_URL = "http://localhost:5014/api/v1";

// ✅ Create preconfigured axios instance
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // Send cookies (JWT, session) in requests
});

export default axiosInstance;
