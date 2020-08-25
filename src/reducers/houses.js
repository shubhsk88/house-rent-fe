import { GET_HOUSES } from '../actions';

const intitalState = {
  houses: [],
};

const houses = (state = intitalState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_HOUSES:
      return { ...state, houses: payload };

    default:
      return state;
  }
};

export default houses;
