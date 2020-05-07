import { actionTypes } from '../actions/actionTypes';
import { expectSaga } from 'redux-saga-test-plan';
import { throwError } from 'redux-saga-test-plan/providers';
import { loadSingleEpisodeSaga } from './singleEpisodeSaga';
import * as matchers from 'redux-saga-test-plan/matchers';
import { getSingleEpisode } from '../../services';
import { mockSingleEpisode } from '../../__mocks__/mockSingleEpisode';

describe('SingleEpisodeSaga', () => {
  const action = {
    type: actionTypes.LOAD_SINGLE_EPISODE_REQUEST,
    payload: { id: 3 },
  };

  it('should load a single episode given an ID', () => {
    return expectSaga(loadSingleEpisodeSaga, action)
      .provide([
        [matchers.call.fn(getSingleEpisode), { data: mockSingleEpisode }],
      ])
      .put({
        type: actionTypes.LOAD_SINGLE_EPISODE_SUCCESS,
        payload: { episode: mockSingleEpisode },
      })
      .run();
  });

  it('should handle error if occurred during loading', () => {
    const action = {
      type: actionTypes.LOAD_SINGLE_EPISODE_REQUEST,
      payload: { id: 3 },
    };

    const error = new Error('404 Episode not found');

    return expectSaga(loadSingleEpisodeSaga, action)
      .provide([[matchers.call.fn(getSingleEpisode), throwError(error)]])
      .put({
        type: actionTypes.LOAD_SINGLE_EPISODE_FAILURE,
        payload: { error },
      })
      .run();
  });
});
