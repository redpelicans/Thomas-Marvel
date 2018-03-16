import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers';
import { fetchHeroes } from './actions'
import Heroes from './components/Heroes';
import './index.css';

const store = createStore(reducer, applyMiddleware(thunk, logger));

store.dispatch(fetchHeroes());

ReactDOM.render(
  <Provider store={store}>
    <Heroes />
  </Provider>,
  document.getElementById('root')
);
