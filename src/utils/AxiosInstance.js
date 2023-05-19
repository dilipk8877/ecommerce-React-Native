import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://ecombackend.softprodigyphp.in",
    headers:{
        "Accept": "application/json",
        "Content-Type": "application/json"
    }
})