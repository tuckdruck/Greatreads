import * as BookAPIUtil from '../util/book_api_util';
import { fetchBookshelves } from './bookshelf_actions';

import
  { startLoadingUserBooks, startLoadingBookshelfBooks,
    startLoadingAllBooks, startLoadingBook, startLoadingBooksForSearch
  } from './load_actions';

export const RECEIVE_BOOKS = "RECEIVE_BOOKS";
export const RECEIVE_BOOK = "RECEIVE_BOOK";
export const REMOVE_BOOK = "REMOVE_BOOK";
export const RECEIVE_BOOKS_FOR_SEARCH = "RECEIVE_BOOKS_FOR_SEARCH";

export const receiveBooks = books => {
  return {
    type: RECEIVE_BOOKS,
    books
  };
};

export const receiveBook = book => {
  return {
    type: RECEIVE_BOOK,
    book: book
  };
};

export const removeBook = book => {
  return {
    type: REMOVE_BOOK,
    book: book
  };
};

export const receiveBooksForSearch = books => {
  return {
    type: RECEIVE_BOOKS_FOR_SEARCH,
    books: books
  };
};

export const fetchUserBooks = userId => {
  return function(dispatch) {
    dispatch(startLoadingUserBooks());
    return BookAPIUtil.fetchUserBooks(userId)
      .then((books) => { return dispatch(receiveBooks(books)); });
  };
};

export const fetchBookshelfBooks = bookshelfId => {

  return function(dispatch) {
    dispatch(startLoadingBookshelfBooks());
    return BookAPIUtil
      .fetchBookshelfBooks(bookshelfId)
      .then((books) => { return dispatch(receiveBooks(books)); });
  };

};

export const updateBook = (info) => {

  return function(dispatch) {
    return BookAPIUtil
      .updateBook(info)
      .then((book) => { return dispatch(receiveBook(book)); });
  };

};

export const fetchBooks = () => {

  return function(dispatch) {
    dispatch(startLoadingAllBooks());
    return BookAPIUtil
      .fetchBooks()
      .then((books) => { return dispatch(receiveBooks(books)); });
  };

};

export const fetchStatusBooks = (statusName) => {

  return function(dispatch) {
    return BookAPIUtil
      .fetchStatusBooks(statusName)
      .then((books) => { return dispatch(receiveBooks(books)); });
  };

};

export const fetchBooksForSearch = (searchString) => {

  return function(dispatch) {
    dispatch(startLoadingBooksForSearch());
    return BookAPIUtil
      .fetchBooksForSearch(searchString)
      .then((books) =>
        { return dispatch(receiveBooksForSearch(books)); });
  };

};
