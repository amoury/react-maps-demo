import axios from 'axios';

const config = {};

config.axiosInstance = axios.create({
    baseURL: "https://react-zen-space.firebaseio.com/"
});


export default config;