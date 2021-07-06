import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './sass/main.scss';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import foodReducer from './store/reducers/foodReducer';

const store = createStore(foodReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
