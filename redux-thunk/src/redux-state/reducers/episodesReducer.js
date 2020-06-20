import { actionTypes } from '../actions/actionTypes';

const initialState = {
  episodes: [],
  loading: true,
  error: false,
  errorMessage: '',
};

export const episodesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_EPISODES_REQUEST':
      return state;
    case 'LOAD_EPISODES_SUCCESS':
      return {
        ...state,
        loading: false,
        episodes: action.payload.results,
      };
    case 'LOAD_EPISODES_FAILURE':
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
