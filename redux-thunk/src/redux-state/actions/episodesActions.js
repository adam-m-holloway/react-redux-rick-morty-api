import axios from 'axios';
import { actionTypes } from './actionTypes';
import { BASE_API_URL } from '../../constants';

// Action Creators
export const loadEpisodesRequestActionCreator = () => ({
  type: actionTypes.LOAD_EPISODES_REQUEST,
});

export const loadEpisodesSuccessActionCreator = (episodes) => ({
  type: actionTypes.LOAD_EPISODES_SUCCESS,
  payload: episodes,
});

export const loadEpisodesFailureActionCreator = () => ({
  type: actionTypes.LOAD_EPISODES_FAILURE,
});

// Thunks
// get all episodes
// Thunk - a function that wraps an expression to delay its evaluation
// A Thunk wraps an async operation in a function (as below)
// Sagas handle asyc operations via generators
export const getEpisodesThunk = () => {
  return (dispatch, getState) => {
    dispatch(loadEpisodesRequestActionCreator());

    return axios
      .get(`${BASE_API_URL}/episode/`)
      .then((response) => {
        dispatch(loadEpisodesSuccessActionCreator(response.data));
      })
      .catch((errorMsg) => {
        dispatch(loadEpisodesFailureActionCreator(errorMsg));
      });
  };
};
