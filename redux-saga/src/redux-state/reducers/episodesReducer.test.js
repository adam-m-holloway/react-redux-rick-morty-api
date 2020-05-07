import { episodesReducer } from './episodesReducer';
import { actionTypes } from '../actions/actionTypes';
import { mockEpisodes } from '../../__mocks__/mockEpisodes';

describe('Episodes reducer', () => {
  it('should start loading episodes', () => {
    const action = {
      type: actionTypes.LOAD_EPISODES_REQUEST,
    };
    const newState = episodesReducer({}, action);
    expect(newState.loading).toEqual(true);
  });

  it('should add episodes to the store if loading was successful', () => {
    const action = {
      type: actionTypes.LOAD_EPISODES_SUCCESS,
      payload: { episodes: { results: mockEpisodes } },
    };

    const newState = episodesReducer({}, action);

    expect(newState.loading).toEqual(false);
    expect(newState.episodes).toEqual(mockEpisodes);
  });

  it('should set error if loading failed', () => {
    const action = {
      type: actionTypes.LOAD_EPISODES_FAILURE,
      payload: { error: new Error() },
    };

    const newState = episodesReducer({}, action);

    expect(newState.loading).toEqual(false);
    expect(newState.error).toEqual(true);
  });
});
