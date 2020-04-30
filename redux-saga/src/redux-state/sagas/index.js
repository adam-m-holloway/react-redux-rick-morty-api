import { EpisodesSaga } from './episodesSagas';

export function* rootSaga() {
  yield* EpisodesSaga();
}
