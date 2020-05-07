import { singleEpisodeReducer } from './singleEpisodeReducer';
import { actionTypes } from '../actions/actionTypes';
import { mockSingleEpisode } from '../../__mocks__/mockSingleEpisode';

describe('Single episodes reducer', () => {
  it('should start loading a single episode', () => {
    const action = {
      type: actionTypes.LOAD_SINGLE_EPISODE_REQUEST,
    };

    const newState = singleEpisodeReducer({}, action);
    expect(newState.loading).toEqual(true);
  });
});
