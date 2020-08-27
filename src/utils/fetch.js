import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
export const publicFetch = axios.create({ baseURL: "https://glacial-reef-12059.herokuapp.com/" });
