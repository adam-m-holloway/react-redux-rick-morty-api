import React from 'react';
import { render } from '@testing-library/react';
import { App } from './App';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const mockStore = configureStore([sagaMiddleware]);

describe('<App />', () => {
  let store;
  let component;

  store = mockStore({
    myState: 'test text',
  });

  component = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  test('should render the header', () => {
    const { getByText } = component;
    const headerText = getByText(/React Redux App/i);
    expect(headerText).toBeInTheDocument();
  });
});
