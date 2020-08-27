import { publicFetch } from '../utils';

export const FETCH_USER = 'GET_USER';
export const FETCH_USER_LIST = 'USER_LIST';
export const SIGNOUT_USER = 'SIGNOUT_USER';

export function fetchUser(data) {
  localStorage.setItem('token', data.token);
  localStorage.setItem('user', JSON.stringify(data.user));
  return { type: FETCH_USER, payload: data };
}

export function signoutUser() {
  localStorage.removeItem('token');
  localStorage.removeItem('user');

  return { type: SIGNOUT_USER };
}

export function fetchUserList(token) {
  return async function helper(dispatch) {
    const config = {
      headers: { Authorization: `Bearer  ${token}` },
    };

    const data = await publicFetch.get('/auto_login', config);

    return dispatch({ type: FETCH_USER_LIST, payload: data.data.houses });
  };
}
