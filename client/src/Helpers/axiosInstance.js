// import axios from "axios";

// const BASE_URL = "http://localhost:5014/api/v1";

// const axiosInstance = axios.create();

// axiosInstance.defaults.baseURL = BASE_URL;
// axiosInstance.defaults.withCredentials = true;

// export default axiosInstance;

// axiosInstance.js
import axios from "axios";

// ✅ Use your backend's actual URL (from .env)
const BASE_URL = import.meta.env.VITE_BACKEND_URL + "/api/v1";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export default axiosInstance;

