import { combineReducers } from 'redux';
import { episodesReducer } from '../features/episodes/episodesSlice';

export const rootReducer = combineReducers({
  episodes: episodesReducer,
});
