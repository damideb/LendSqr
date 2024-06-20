import axios from "axios";


export const axiosBase = axios.create({
    baseURL: 'https://api.json-generator.com/templates/CkwJz8zka-9C',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: import.meta.env.VITE_APP_BASE_API_KEY
    }
});

