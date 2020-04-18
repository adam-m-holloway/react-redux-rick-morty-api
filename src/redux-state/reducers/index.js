import { combineReducers } from 'redux';
import { episodesReducer } from './episodesReducer';
import { singleEpisodeReducer } from './singleEpisodeReducer';

export const rootReducer = combineReducers({
  episodes: episodesReducer,
  singleEpisode: singleEpisodeReducer,
});
