import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { getEpisodes, getSingleEpisode } from './index';
import { BASE_API_URL } from '../constants';
import { mockEpisodes } from '../__mocks__/mockEpisodes';
import { mockSingleEpisode } from '../__mocks__/mockSingleEpisode';

describe('Services', () => {
  const mock = new MockAdapter(axios);

  describe('Show episodes', () => {
    it('should return episodes data', (done) => {
      mock.onGet(`${BASE_API_URL}/episode/`).reply(200, mockEpisodes);

      getEpisodes(mockEpisodes).then(({ data }) => {
        expect(data).toEqual(mockEpisodes);
        done();
      });
    });
  });

  describe('Show single episode', () => {
    it('should return a single episode', (done) => {
      mock
        .onGet(`${BASE_API_URL}/episode/${mockSingleEpisode.id}/`)
        .reply(200, mockSingleEpisode);

      getSingleEpisode(mockSingleEpisode.id).then(({ data }) => {
        expect(data).toEqual(mockSingleEpisode);
        done();
      });
    });
  });
});
