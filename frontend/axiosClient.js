import axios from "axios";
import Cookies from "js-cookie";  

const AxiosClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/',
    withCredentials: true,
});

await AxiosClient.get('/sanctum/csrf-cookie');

AxiosClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }

    const xsrfToken = Cookies.get('XSRF-TOKEN');
    if (xsrfToken) {
        config.headers['X-XSRF-TOKEN'] = xsrfToken;
    }

    return config;
});

AxiosClient.interceptors.response.use(
    (response) => response,
    (error) => {
        const { response } = error;
        if (response?.status === 401) {
            localStorage.removeItem('token');
        }
        throw error;
    }
);

export default AxiosClient;
