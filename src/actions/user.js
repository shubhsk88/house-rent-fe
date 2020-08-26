export const FETCH_USER = 'GET_USER';

export const SIGNOUT_USER = 'SIGNOUT_USER';

export function fetchUser(data) {
  return { type: FETCH_USER, payload: data };
}

export function signoutUser() {
  return { type: SIGNOUT_USER };
}
