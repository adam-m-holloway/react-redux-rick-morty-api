import { actionTypes } from '../actions/actionTypes';
import { expectSaga } from 'redux-saga-test-plan';
import { throwError } from 'redux-saga-test-plan/providers';
import { loadEpisodesSaga } from './episodesSagas';
import * as matchers from 'redux-saga-test-plan/matchers';
import { getEpisodes } from '../../services';
import { mockEpisodes } from '../../__mocks__/mockEpisodes';

describe('EpisodesSaga', () => {
  it('should load the episodes', () => {
    const action = {
      type: actionTypes.LOAD_EPISODES_REQUEST,
    };

    return expectSaga(loadEpisodesSaga, action)
      .provide([[matchers.call.fn(getEpisodes), { data: mockEpisodes }]])
      .put({
        type: actionTypes.LOAD_EPISODES_SUCCESS,
        payload: { episodes: mockEpisodes },
      })
      .run();
  });

  it('should handle error if occurred during loading', () => {
    const action = {
      type: actionTypes.LOAD_EPISODES_REQUEST,
    };

    const error = new Error('404 Episode not found');

    return expectSaga(loadEpisodesSaga, action)
      .provide([[matchers.call.fn(getEpisodes), throwError(error)]])
      .put({
        type: actionTypes.LOAD_EPISODES_FAILURE,
        payload: { error },
      })
      .run();
  });
});
