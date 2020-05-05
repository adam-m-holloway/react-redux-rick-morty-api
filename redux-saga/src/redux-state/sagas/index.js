import { EpisodesSaga } from './episodesSagas';
import { SingleEpisodeSaga } from './singleEpisodeSaga';

export function* rootSaga() {
  yield* EpisodesSaga();
  yield* SingleEpisodeSaga();
}
