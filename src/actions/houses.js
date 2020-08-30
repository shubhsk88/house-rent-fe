import { publicFetch } from '../utils';

export const RESET_HOUSE = 'RESET_HOUSE';
export const FETCH_HOUSES = 'FETCH_HOUSES';
export const FETCH_HOUSE = 'FETCH_HOUSE';

export function fetchHouses() {
  return async function helper(dispatch) {
    try {
      const { data } = await publicFetch.get('/houses');
      return dispatch({ type: FETCH_HOUSES, payload: data.houses });
    } catch (error) {
      return dispatch({ type: FETCH_HOUSES, payload: [] });
    }
  };
}

export function fetchHouse(id) {
  return async function helper(dispatch) {
    try {
      const { data } = await publicFetch.get(`/houses/${id}`);

      return dispatch({ type: FETCH_HOUSE, payload: data });
    } catch (error) {
      return dispatch({ type: FETCH_HOUSE, payload: {} });
    }
  };
}

export function resetHouse() {
  return { type: RESET_HOUSE };
}
