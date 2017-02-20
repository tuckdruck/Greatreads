import * as BookshelfAPIUtil from '../util/bookshelf_api_util';

export const RECEIVE_BOOKSHELVES = "RECEIVE_BOOKSHELVES";
export const RECEIVE_BOOKSHELF = "RECEIVE_BOOKSHELF";
export const REMOVE_BOOKSHELF = "REMOVE_BOOKSHELF";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const SELECT_BOOKSHELF = "SELECT_BOOKSHELF";

export const receiveBookshelves = bookshelves => {
  return {
    type: RECEIVE_BOOKSHELVES,
    bookshelves
  };
};

export const receiveBookshelf = bookshelf => {
  return {
    type: RECEIVE_BOOKSHELF,
    bookshelf: bookshelf
  };
};

export const removeBookshelf = bookshelf => {
  debugger
  return {
    type: REMOVE_BOOKSHELF,
    bookshelf
  };
};

export const receiveErrors = errors => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const selectBookshelf = bookshelf => {
  return {
    type: SELECT_BOOKSHELF,
    bookshelf
  };
};


export const fetchBookshelves = (userId) => {
  debugger
  return function(dispatch) {
    debugger
    return BookshelfAPIUtil.fetchBookshelves(userId).then((bookshelves) => { return dispatch(receiveBookshelves(bookshelves)); });
  };
};


export const createBookshelf = (bookshelf, userId) => {
  return function(dispatch) {

    return BookshelfAPIUtil.createBookshelf(bookshelf, userId)
      .then((newBookshelf) => { return dispatch(receiveBookshelf(newBookshelf)); })
      .fail((errors) => {
        return dispatch(receiveErrors(errors.responseJSON)); });
  };
};

export const updateBookshelf = (bookshelf, userId) => {
  return function(dispatch) {
    return BookshelfAPIUtil.updateBookshelf(bookshelf, userId)
      .then((updatedBookshelf) => { return dispatch(receiveBookshelf(updatedBookshelf)); })
      .fail((errors) => { return dispatch(receiveErrors(errors.responseJSON)); });
  };
};

export const deleteBookshelf = (bookshelfId, userId) => {
  return function(dispatch) {
    return BookshelfAPIUtil.deleteBookshelf(bookshelfId, userId)
      .then((removedBookshelf) => { return dispatch(removeBookshelf(removedBookshelf)); });
  };
};
