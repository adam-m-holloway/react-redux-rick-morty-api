import { actionTypes } from '../actions/actionTypes';

const initialState = {
  episodes: [],
  loading: true,
  error: false,
  errorMessage: '',
};

export const episodesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_EPISODES_REQUEST:
      return state;
    case actionTypes.LOAD_EPISODES_SUCCESS:
      return {
        ...state,
        loading: false,
        episodes: action.payload.episodes.results,
      };
    case actionTypes.LOAD_EPISODES_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
