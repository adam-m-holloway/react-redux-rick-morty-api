import { takeEvery, call, put } from 'redux-saga/effects';

import { actionTypes } from '../actions/actionTypes';
import {
  loadSingleEpisodeSuccessActionCreator,
  loadSingleEpisodeFailureActionCreator,
} from '../actions/singleEpisodeActions';
import { getSingleEpisode } from '../../services';

/*
  worker saga
  triggered by the SingleEpisodeSaga() watcher saga
*/
export function* loadSingleEpisodeSaga({ payload: { id } }) {
  try {
    const response = yield call(getSingleEpisode, id);
    yield put(loadSingleEpisodeSuccessActionCreator(response.data));
  } catch (errorMsg) {
    yield put(loadSingleEpisodeFailureActionCreator(errorMsg));
  }
}

/*
  watcher saga
  watches when LOAD_SINGLE_EPISODE_REQUEST is called and then calls `loadSingleEpisodeSaga()` worker saga
*/
export function* SingleEpisodeSaga() {
  yield takeEvery(
    actionTypes.LOAD_SINGLE_EPISODE_REQUEST,
    loadSingleEpisodeSaga
  );
}
