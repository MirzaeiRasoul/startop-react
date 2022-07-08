import axios from 'axios';

const instance = axios.create();

// Customize axios and clear default console error logs
instance.interceptors.response.use((response) => {
    return response;
}, (error) => {
    console.clear(); // Clear default browser console error
    return Promise.reject(error);
});

export default instance;
