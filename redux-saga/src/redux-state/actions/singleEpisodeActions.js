import { actionTypes } from './actionTypes';

// Action Creators
export const loadSingleEpisodeRequestActionCreator = (id) => ({
  type: actionTypes.LOAD_SINGLE_EPISODE_REQUEST,
  payload: { id },
});

export const loadSingleEpisodeSuccessActionCreator = (episode) => ({
  type: actionTypes.LOAD_SINGLE_EPISODE_SUCCESS,
  payload: { episode },
});

export const loadSingleEpisodeFailureActionCreator = (error) => ({
  type: actionTypes.LOAD_SINGLE_EPISODE_FAILURE,
  payload: { error },
});
