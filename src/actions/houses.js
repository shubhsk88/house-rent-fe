import { publicFetch } from '../utils';
import { data } from 'autoprefixer';

export const GET_HOUSES = 'GET_HOUSES';

export function getHouses() {
  return async function (dispatch) {
    try {
      const { data } = await publicFetch.get('/houses');
      return dispatch({ type: GET_HOUSES, payload: data.houses });
    } catch (error) {
      console.error(error);
      return dispatch({ type: GET_HOUSES, payload: [] });
    }
  };
}
