import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as BookshelfAPIUtil from './util/bookshelf_api_util';
import * as BookAPIUtil from './util/book_api_util';
import * as StatusAPIUtil from './util/status_api_util';
import { updateStatus } from './actions/status_actions';
import * as ReviewAPIUtil from './util/review_api_util';

import { signup, login, logout } from './util/session_api_util';

document.addEventListener("DOMContentLoaded", () => {
  let store;

  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser, errors: [] } };
    store = configureStore(preloadedState);
  }
  else {
    store = configureStore();
  }

  const root = document.getElementById("root");

  ReactDOM.render(<Root store={store} />, root);
});
