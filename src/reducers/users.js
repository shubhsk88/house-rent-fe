import { FETCH_USER, SIGNOUT_USER } from '../actions';

const user = localStorage.getItem('user');
const token = localStorage.getItem('token');
const intialState = {
  user: user ? JSON.parse(user) : {},
  token,
  isLoggedIn: token ? true : false,
};

export default function (state = intialState, action) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_USER:
      return { ...state, user: payload.user, token: payload.token };
    case SIGNOUT_USER:
      return { ...state, intialState };
    default:
      return state;
  }
}
