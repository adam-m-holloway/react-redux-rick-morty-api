import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadEpisodesRequestActionCreator } from '../redux-state/actions/episodesActions';

const _EpisodesPage = ({ dispatch, episodes, loading, error }) => {
  useEffect(() => {
    dispatch(loadEpisodesRequestActionCreator());
  }, [dispatch]);

  // Show loading, error or success state
  const renderEpisodes = () => {
    if (loading) return <p>Loading films...</p>;
    if (error) return <p>Unable to display films.</p>;
    return episodesTable();
  };

  const episodesTable = () => (
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Air Date</td>
          <td>Episode</td>
          <td>URL</td>
        </tr>
      </thead>
      <tbody>
        {episodes.map((episode) => (
          <tr key={episode.id}>
            <td>{episode.name}</td>
            <td>{episode.air_date}</td>
            <td>{episode.episode}</td>
            <td>
              <Link to={`/episodes/${episode.id}`}>View film</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div>
      <h2>Episodes</h2>
      {renderEpisodes()}
    </div>
  );
};

// Can replace this using useSelector and useDispatch
// Saves destructuring props, see Film-Hooks.js
const mapStateToProps = (state) => ({
  episodes: state.episodes.episodes,
  loading: state.episodes.loading,
  error: state.episodes.error,
});

export const EpisodesPage = connect(mapStateToProps, null)(_EpisodesPage);
