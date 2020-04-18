import { createStore, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

import { rootReducer } from '../reducers';

const middleware = [thunk];

if (process.env.NODE_ENV === 'development') {
  middleware.push(reduxImmutableStateInvariant(), logger);
}

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
