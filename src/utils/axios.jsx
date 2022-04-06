import axios from "axios";

const defaultOptions = {
    baseURL: "http://142.93.229.148/",
    headers: {
        'Content-Type': 'application/json',
    },
};

let API = axios.create(defaultOptions);

API.interceptors.request.use(function (config) {
    let token=localStorage.getItem('user-token')

    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
});

export default API;

