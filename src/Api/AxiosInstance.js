import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://bookstore.eraasoft.pro/api"
});
export default axiosInstance;