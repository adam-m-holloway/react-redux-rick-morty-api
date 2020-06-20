import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadEpisodes } from '../episodes/episodesSlice';

export const Episodes = () => {
  const dispatch = useDispatch();
  const episodes = useSelector((state) => state.episodes.episodes);
  const loading = useSelector((state) => state.episodes.loading);
  const error = useSelector((state) => state.episodes.error);

  useEffect(() => {
    dispatch(loadEpisodes());
  }, [dispatch]);

  return (
    <div>
      <h1>Episodes</h1>

      {loading && <p>Loading...</p>}

      {error && <p>Error, please try again</p>}

      {episodes &&
        episodes.map((episode) => (
          <ul key={episode.id}>
            <li>{episode.name}</li>
            <li>{episode.air_date}</li>
            <li>{episode.episode}</li>
          </ul>
        ))}
    </div>
  );
};
