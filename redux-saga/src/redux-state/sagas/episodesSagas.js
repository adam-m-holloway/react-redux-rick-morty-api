import { call, put, takeEvery } from 'redux-saga/effects';
import {
  loadEpisodesFailureActionCreator,
  loadEpisodesSuccessActionCreator,
} from '../actions/episodesActions';
import { getEpisodes } from '../../services';
import { actionTypes } from '../actions/actionTypes';

/*
  worker saga
  triggered by the EpisodesSaga() watcher saga
*/
export function* loadEpisodesSaga() {
  try {
    const response = yield call(getEpisodes); // make API request and store response in variable
    yield put(loadEpisodesSuccessActionCreator(response.data)); // dispatch action
  } catch (errorMsg) {
    yield put(loadEpisodesFailureActionCreator(errorMsg));
  }
}

/*
  watcher saga
  watches when LOAD_EPISODES_REQUEST is called and then calls `loadEpisodesSaga()` worker saga
*/
export function* EpisodesSaga() {
  yield takeEvery(actionTypes.LOAD_EPISODES_REQUEST, loadEpisodesSaga); // or takeLatest() ???
}
