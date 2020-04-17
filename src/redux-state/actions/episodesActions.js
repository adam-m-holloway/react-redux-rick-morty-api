import axios from 'axios';
import { actionTypes } from './actionTypes';
import { BASE_API_URL } from '../../constants';

// Action Creators
export const loadEpisodesRequestActionCreator = () => ({
  type: actionTypes.LOAD_EPISODES_REQUEST,
});

export const loadEpisodesSuccessActionCreator = (films) => ({
  type: actionTypes.LOAD_EPISODES_SUCCESS,
  payload: films,
});

export const loadEpisodesFailureActionCreator = () => ({
  type: actionTypes.LOAD_EPISODES_FAILURE,
});

// Thunks
// get all episodes
// Thunk - a function that wraps an expression to delay its evaluation
export const getEpisodesThunk = () => {
  return (dispatch, getState) => {
    dispatch(loadEpisodesRequestActionCreator());

    return axios
      .get(`${BASE_API_URL}/episode`)
      .then((response) => {
        dispatch(loadEpisodesSuccessActionCreator(response.data));
      })
      .catch((errorMsg) => {
        dispatch(loadEpisodesFailureActionCreator(errorMsg));
      });
  };
};
