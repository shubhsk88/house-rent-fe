import { FETCH_USER, SIGNOUT_USER, FETCH_USER_LIST } from '../actions';

const user = localStorage.getItem('user');
const token = localStorage.getItem('token');
const intialState = {
  user: user ? JSON.parse(user) : {},
  token,
  isLoggedIn: !!token,
  userList: [],
};

export default function (state = intialState, action) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_USER:
      return {
        ...state,
        user: payload.user,
        token: payload.token,
        isLoggedIn: true,
      };
    case SIGNOUT_USER:
      return {
        ...state, user: {}, isLoggedIn: false, token: null,
      };
    case FETCH_USER_LIST:
      return { ...state, userList: payload };
    default:
      return state;
  }
}
