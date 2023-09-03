import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080/api/', // Thay thế bằng URL của API của bạn ví dụ https://your-api-url.com
    timeout: 6000, // Thời gian timeout
});

api.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem('access_token');
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;