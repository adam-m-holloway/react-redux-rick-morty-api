// import React from 'react';
// import { render as rtlRender } from '@testing-library/react';
// import { Provider } from 'react-redux';

// function render(ui, { initialState, store, ...renderOptions } = {}) {
//   function Wrapper({ children }) {
//     return <Provider store={store}>{children}</Provider>;
//   }
//   return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
// }

// function MockStore(data) {
//   this.data = data;

//   return {
//     dispatch: () => {},

//     subscribe: () => {},

//     getState: () => this.data,
//   };
// }

// // re-export everything
// export * from '@testing-library/react';

// // override render method
// export { render, MockStore };
