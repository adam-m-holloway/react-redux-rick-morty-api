import { actionTypes } from '../actions/actionTypes';

const initialState = {
  episode: {},
  loading: true,
  error: false,
  errorMessage: '',
};

export const singleEpisodeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_SINGLE_EPISODE_REQUEST:
      return state;
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
      };
    default:
      return state;
  }
};
