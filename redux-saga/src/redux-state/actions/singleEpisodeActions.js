import { actionTypes } from './actionTypes';

// Action Creators
export const loadSingleEpisodeRequestActionCreator = (id) => ({
  type: actionTypes.LOAD_SINGLE_EPISODE_REQUEST,
  payload: { id },
});

export const loadSingleEpisodeSuccessActionCreator = (episodes) => ({
  type: actionTypes.LOAD_SINGLE_EPISODE_SUCCESS,
  payload: episodes,
});

export const loadSingleEpisodeFailureActionCreator = (error) => ({
  type: actionTypes.LOAD_SINGLE_EPISODE_FAILURE,
  payload: { error },
});
