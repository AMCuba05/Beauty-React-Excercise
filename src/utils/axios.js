import axios from 'axios';

export const AxiosClient = axios.create({
    baseURL: process.env.BASE_URL,
    headers: {
        'Accept': 'application/json',
    }
});
