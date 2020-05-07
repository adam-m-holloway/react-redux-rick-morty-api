import { actionTypes } from '../actions/actionTypes';

const initialState = {
  episode: {},
  loading: false,
  error: false,
  errorMessage: '',
};

export const singleEpisodeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_SINGLE_EPISODE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.LOAD_SINGLE_EPISODE_SUCCESS:
      return {
        ...state,
        loading: false,
        episode: action.payload.episode,
      };
    case actionTypes.LOAD_SINGLE_EPISODE_FAILURE:
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
