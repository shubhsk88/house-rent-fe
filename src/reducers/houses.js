import { FETCH_HOUSES, FETCH_HOUSE,RESET_HOUSE } from '../actions';

const intitalState = {
  houses: [],
  house: {},
  isHousesLoading: true,
  isHouseLoading: true,
};

const houses = (state = intitalState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_HOUSES:
      return { ...state, houses: payload, isHousesLoading: false };

    case FETCH_HOUSE:
      return { ...state, house: payload, isHouseLoading: false };
    case RESET_HOUSE:
      return {...state,house:{}}
      default:
      return state;
  }
};

export default houses;
