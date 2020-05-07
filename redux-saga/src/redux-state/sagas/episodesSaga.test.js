import { actionTypes } from '../actions/actionTypes';
import { expectSaga } from 'redux-saga-test-plan';
import { loadEpisodesSaga } from './episodesSagas';
import * as matchers from 'redux-saga-test-plan/matchers';
import { getEpisodes } from '../../services';
import { mockEpisodes } from '../../__mocks__/mockEpisodes';

describe('EpisodesSaga', () => {
  const action = {
    type: actionTypes.LOAD_EPISODES_REQUEST,
  };

  it('should load the episodes', () => {
    return expectSaga(loadEpisodesSaga, action)
      .provide([[matchers.call.fn(getEpisodes), { data: mockEpisodes }]])
      .put({
        type: actionTypes.LOAD_EPISODES_SUCCESS,
        payload: mockEpisodes,
      })
      .run();
  });
});
