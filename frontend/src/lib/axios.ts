import axios from "axios";

export const api = axios.create({
    baseURL: 'https://adopetapi-production.up.railway.app/'
})