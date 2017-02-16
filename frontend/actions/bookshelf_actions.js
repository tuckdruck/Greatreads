import * as BookshelfAPIUtil from '../util/bookshelf_api_util';

export const RECEIVE_BOOKSHELVES = "RECEIVE_BOOKSHELVES";

export const receiveBookshelves = bookshelves => {
  return {
    type: RECEIVE_BOOKSHELVES,
    bookshelves
  };
};

export const fetchBookshelves = () => {
  return function(dispatch) {
    return BookshelfAPIUtil.fetchBookshelves().then((bookshelves) => { return dispatch(receiveBookshelves(bookshelves)); });
  };
};
