import * as BookAPIUtil from '../util/book_api_util';
export const RECEIVE_BOOKS = "RECEIVE_BOOKS";

export const receiveBooks = books => {
  return {
    type: RECEIVE_BOOKS,
    books
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
