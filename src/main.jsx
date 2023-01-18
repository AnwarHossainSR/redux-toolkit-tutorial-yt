import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './assets/style/index.scss';
import store from './redux/store';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider stor={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
