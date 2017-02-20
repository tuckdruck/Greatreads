import * as BookAPIUtil from '../util/book_api_util';
import { fetchBookshelves } from './bookshelf_actions';

export const RECEIVE_BOOKS = "RECEIVE_BOOKS";
export const RECEIVE_BOOK = "RECEIVE_BOOK";
export const REMOVE_BOOK = "REMOVE_BOOK";

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
  debugger
  return {
    type: REMOVE_BOOK,
    book: book
  };
};

export const fetchUserBooks = userId => {
  return function(dispatch) {
    return BookAPIUtil.fetchUserBooks(userId).then((books) => { return dispatch(receiveBooks(books)); });
  };
};

export const fetchBookshelfBooks = bookshelfId => {
  return function(dispatch) {
    return BookAPIUtil.fetchBookshelfBooks(bookshelfId).then((books) => { return dispatch(receiveBooks(books)); });
  };
};

export const updateBook = (info) => {
  return function(dispatch) {
    return BookAPIUtil.updateBook(info).then((book) => { return dispatch(receiveBook(book)); });
  };
};

export const fetchBooks = () => {
  return function(dispatch) {
    return BookAPIUtil.fetchBooks().then((books) => { return dispatch(receiveBooks(books)); });
  };
};
