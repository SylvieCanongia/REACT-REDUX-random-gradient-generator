// == Import : npm
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from 'src/store';

// == Import : local
// Components
import App from 'src/components/App';

// == Render
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
