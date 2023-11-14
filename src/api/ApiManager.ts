import axios from "axios";

export const ApiManager = axios.create({
    baseURL: ``,
    responseType: 'json'
})