import axios from 'axios';
import { actionTypes } from './actionTypes';
import { BASE_API_URL } from '../../constants';

// Action Creators
export const loadSingleEpisodeRequestActionCreator = () => ({
  type: actionTypes.LOAD_SINGLE_EPISODE_REQUEST,
});

export const loadSingleEpisodeSuccessActionCreator = (films) => ({
  type: actionTypes.LOAD_SINGLE_EPISODE_SUCCESS,
  payload: films,
});

export const loadSingleEpisodeFailureActionCreator = () => ({
  type: actionTypes.LOAD_SINGLE_EPISODE_FAILURE,
});

// Thunks
// get single film
export const getSingleEpisodeThunk = (id) => {
  console.log('id in thunk:', id);
  return (dispatch) => {
    dispatch(loadSingleEpisodeRequestActionCreator());

    return axios
      .get(`${BASE_API_URL}/episode/${id}/`)
      .then((response) => {
        dispatch(loadSingleEpisodeSuccessActionCreator(response.data));
      })
      .catch((errorMsg) => {
        dispatch(loadSingleEpisodeFailureActionCreator(errorMsg));
      });
  };
};
