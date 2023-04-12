import axios from 'axios';
import {config} from "dotenv";

config();

// Configure axios instance with shopify baseUrl
const axiosInstance = axios.create({
    baseURL: `https://${process.env.SHOPIFY_API_KEY}:${process.env.SHOPIFY_PASSWORD}@${process.env.SHOPIFY_STORE_NAME}/admin/api/${process.env.SHOPIFY_API_VERSION}`,
    responseType: 'json',
});

export default axiosInstance;
