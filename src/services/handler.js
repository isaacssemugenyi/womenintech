import axios from 'axios';
import { BASE_URL } from './URLConfig';

// Axios instance of the connection
export const API = axios.create({
    baseURL: BASE_URL
});