import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import {
  HomePage,
  EpisodesPage,
  SingleEpisodePage,
  NotFoundPage,
} from './pages';
import { store } from './redux-state/store';
import './App.css';

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <header className="App-header">
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/episodes">Episodes</Link>
                </li>
              </ul>
            </nav>
            <p>React Redux Rick and Morty API</p>
          </header>
          <div className="App-content">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/episodes" component={EpisodesPage} />
              <Route exact path="/episodes/:id" component={SingleEpisodePage} />
              <Route path="*" component={NotFoundPage} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
};
