import { actionTypes } from './actionTypes';
import thunk from 'redux-thunk';
import axios from 'axios';
import configureStore from 'redux-mock-store';
import { getEpisodesThunk } from './episodesActions';
import { mockEpisodes } from '../../__mocks__/mockEpisodes';

jest.mock('axios');

// Test an async action
const middleware = [thunk];
const mockStore = configureStore(middleware);

describe('Async actions', () => {
  describe('Load episodes thunk', () => {
    it('should create LOAD_EPISODES_REQUESTED and LOAD_EPISODES_REQUESTED when loading episodes', () => {
      axios.get.mockImplementation(() =>
        Promise.resolve({ data: mockEpisodes })
      );

      const expectedActions = [
        { type: actionTypes.LOAD_EPISODES_REQUEST },
        {
          type: actionTypes.LOAD_EPISODES_SUCCESS,
          payload: mockEpisodes,
        },
      ];

      const store = mockStore({ episodes: [] });
      return store.dispatch(getEpisodesThunk()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
