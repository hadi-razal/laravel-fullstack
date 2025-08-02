import axios from "axios";



const AxiosClient = axios.create({
  baseURL:import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/',
    withCredentials: true, // Include credentials (cookies) in requests
});
  
AxiosClient.interceptors.request.use((config) => {

    const token = localStorage.getItem('token');

    if (token) {  
        config.headers['Authorization'] = `Bearer ${token}`;
    } 

    return config;
})

AxiosClient.interceptors.response.use((response)=>{
    return response;
}, (error) => {
    const {response} = error;
    if (response.status === 401) {
        localStorage.removeItem('token');
    }

    throw error;
})


export default AxiosClient;
