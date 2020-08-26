import { FETCH_USER, SIGNOUT_USER } from '../actions';

const intialState = {
  user: {},
  token: null,
  isLoggedIn: false,
};

export default function (state = intialState, action) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_USER:
      return { ...state, user: payload.user, token: payload.token };
    case SIGNOUT_USER:
      return { ...state };
    default:
      return state;
  }
}
