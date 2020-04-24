import React from 'react';
import { render } from '@testing-library/react';
import { App } from './App';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const middlewares = [];
const mockStore = configureStore(middlewares);

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
    const headerText = getByText(/React Redux Rick and Morty API/i);
    expect(headerText).toBeInTheDocument();
  });
});
