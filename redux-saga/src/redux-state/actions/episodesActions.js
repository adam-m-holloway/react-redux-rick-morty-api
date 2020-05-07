import { actionTypes } from './actionTypes';

// Action Creators
export const loadEpisodesRequestActionCreator = () => ({
  type: actionTypes.LOAD_EPISODES_REQUEST,
});

export const loadEpisodesSuccessActionCreator = (episodes) => ({
  type: actionTypes.LOAD_EPISODES_SUCCESS,
  payload: { episodes },
});

export const loadEpisodesFailureActionCreator = (error) => ({
  type: actionTypes.LOAD_EPISODES_FAILURE,
  payload: { error },
});
