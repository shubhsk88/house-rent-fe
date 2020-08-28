import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
export const publicFetch = axios.create({
  baseURL: 'https://glacial-reef-12059.herokuapp.com/',
});

export const setLocalStorage = data => {
  localStorage.setItem('token', data.token);
  localStorage.setItem('user', JSON.stringify(data.user));
};

export const removeLocalStorage = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};
