import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getSingleEpisodeThunk } from '../redux-state/actions/singleEpisodeActions';

// `match` param is automatically passed and provides route data
const _SingleEpisodePage = ({ match, dispatch, episode, loading, error }) => {
  const { id } = match.params;

  useEffect(() => {
    dispatch(getSingleEpisodeThunk(id));
  }, [dispatch, id]);

  return (
    <div>
      <h2>Single Episode</h2>

      {loading ? (
        <p>Loading episode...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Air Date</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{episode.name}</td>
              <td>{episode.air_date}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  episode: state.singleEpisode.episode,
  loading: state.singleEpisode.loading,
  error: state.singleEpisode.error,
});

export const SingleEpisodePage = connect(
  mapStateToProps,
  null
)(_SingleEpisodePage);
