import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as BookshelfAPIUtil from './util/bookshelf_api_util';
import * as BookAPIUtil from './util/book_api_util';

import { signup, login, logout } from './util/session_api_util';
window.fetchBookshelves = BookshelfAPIUtil.fetchBookshelves;
window.fetchBookshelfBooks = BookAPIUtil.fetchBookshelfBooks;
window.fetchUserBooks = BookAPIUtil.fetchUserBooks;

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
