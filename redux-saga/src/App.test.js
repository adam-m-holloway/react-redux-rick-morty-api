import React from 'react';
import { render } from '@testing-library/react';
import { App } from './App';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe('<App />', () => {
  test('should render the header', () => {
    const store = mockStore({
      myState: 'test text',
    });

    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const headerText = getByText(/React Redux Rick and Morty API/i);
    expect(headerText).toBeInTheDocument();
  });
});
