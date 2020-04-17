import { combineReducers } from 'redux';
import { episodesReducer } from './episodesReducer';
// import { singleFilmReducer } from './singleFilmReducer';

export const rootReducer = combineReducers({
  episodes: episodesReducer,
  // singleFilm: singleFilmReducer,
});
