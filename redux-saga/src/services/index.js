import axios from 'axios';
import { BASE_API_URL } from '../constants';

export const getEpisodes = () => {
  return axios.get(`${BASE_API_URL}/episode/`);
};
