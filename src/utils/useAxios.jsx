import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://ruling-quetzal-noticeably.ngrok-free.app/api",
});