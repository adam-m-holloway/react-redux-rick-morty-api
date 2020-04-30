import { actionTypes } from './actionTypes';

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
