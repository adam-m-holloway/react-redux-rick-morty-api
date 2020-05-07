import { singleEpisodeReducer } from './singleEpisodeReducer';
import { actionTypes } from '../actions/actionTypes';
import { mockSingleEpisode } from '../../__mocks__/mockSingleEpisode';

describe('Single episodes reducer', () => {
  it('should start loading a single episode', () => {
    const action = {
      type: actionTypes.LOAD_SINGLE_EPISODE_REQUEST,
      payload: { id: 1 },
    };

    const newState = singleEpisodeReducer({}, action);
    expect(newState.loading).toEqual(true);
  });

  it('should add a single episode to the store if loading was successful', () => {
    const action = {
      type: actionTypes.LOAD_SINGLE_EPISODE_SUCCESS,
      payload: { episode: mockSingleEpisode },
    };

    const newState = singleEpisodeReducer({}, action);

    expect(newState.loading).toEqual(false);
    expect(newState.episode).toEqual(mockSingleEpisode);
  });

  it('should set error if loading failed', () => {
    const action = {
      type: actionTypes.LOAD_SINGLE_EPISODE_FAILURE,
      payload: { error: new Error() },
    };

    const newState = singleEpisodeReducer({}, action);

    expect(newState.loading).toEqual(false);
    expect(newState.error).toEqual(true);
  });
});
