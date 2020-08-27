import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
export const publicFetch = axios.create({ baseURL: process.env.REACT_APP_URL });
