import axios from 'axios';

export const publicFetch = axios.create({ baseURL: process.env.REACT_APP_URL });
