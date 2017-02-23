import
  { CHANGE_LOADED_STATUS,
    START_LOADING_USER_BOOKS,
    START_LOADING_BOOKSHELF_BOOKS,
    START_LOADING_ALL_BOOKS,
    START_LOADING_BOOK,
    START_LOADING_USER_BOOKSHELVES,
    START_LOADING_REVIEWS,
    START_LOADING_BOOKS_FOR_SEARCH
  } from '../actions/load_actions';
import { RECEIVE_BOOKS, RECEIVE_BOOK, RECEIVE_BOOKS_FOR_SEARCH } from '../actions/book_actions';
import { RECEIVE_BOOKSHELVES, RECEIVE_BOOKSHELF } from '../actions/bookshelf_actions';
import { RECEIVE_REVIEWS } from '../actions/review_actions';

const initialState = {
  booksLoading: false,
  bookshelvesLoading: false,
  reviewsLoading: false,
  booksForSearchLoading: false
};

const LoadReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_LOADING_USER_BOOKS:
    case START_LOADING_BOOKSHELF_BOOKS:
    case START_LOADING_ALL_BOOKS:
    case START_LOADING_BOOK:
      return Object.assign({}, state, { booksLoading: true });
    case START_LOADING_USER_BOOKSHELVES:
      return Object.assign({}, state, { bookshelvesLoading: true });
    case START_LOADING_BOOKS_FOR_SEARCH:
      return Object.assign({}, state, { booksForSearchLoading: true });
    case START_LOADING_REVIEWS:
      return Object.assign({}, state, { reviewsLoading: true });
    case RECEIVE_BOOKS:
    case RECEIVE_BOOK:
      return Object.assign({}, state, { booksLoading: false });
    case RECEIVE_BOOKS_FOR_SEARCH:
      return Object.assign({}, state, { booksForSearchLoading: false });
    case RECEIVE_BOOKSHELVES:
    case RECEIVE_BOOKSHELF:
      return Object.assign({}, state, { bookshelvesLoading: false });
    case RECEIVE_REVIEWS:
      return Object.assign({}, state, { reviewsLoading: false });
    default:
      return state;
  }
};

export default LoadReducer;
