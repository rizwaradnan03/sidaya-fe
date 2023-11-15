import axios from "axios";

export const ApiManager = axios.create({
    baseURL: `http://147.139.173.249:3004/api`,
    responseType: 'json'
})