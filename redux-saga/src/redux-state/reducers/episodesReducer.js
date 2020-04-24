import { actionTypes } from '../actions/actionTypes';

const initialState = {
  episodes: [],
  loading: false,
  error: false,
  errorMessage: '',
};

export const episodesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_EPISODES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.LOAD_EPISODES_SUCCESS:
      return {
        ...state,
        loading: false,
        episodes: action.payload.results,
      };
    case actionTypes.LOAD_EPISODES_FAILURE:
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
