import * as BookshelfAPIUtil from '../util/bookshelf_api_util';

export const RECEIVE_BOOKSHELVES = "RECEIVE_BOOKSHELVES";
export const RECEIVE_BOOKSHELF = "RECEIVE_BOOKSHELF";

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

export const fetchBookshelves = () => {
  return function(dispatch) {
    return BookshelfAPIUtil.fetchBookshelves().then((bookshelves) => { return dispatch(receiveBookshelves(bookshelves)); });
  };
};

export const createBookshelf = bookshelf => {
  return function(dispatch) {
    return BookshelfAPIUtil.createBookshelf(bookshelf).then((newBookshelf) => { return dispatch(receiveBookshelf(newBookshelf)); });
  };
};

// export const fetchBookshelves = (bookId) => {
//   return function(dispatch) {
//     return BookshelfAPIUtil.fetchBookshelvesForBook()
//   }
// }
