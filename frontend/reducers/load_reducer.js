import { CHANGE_LOADED_STATUS, START_LOADING_USER_BOOKS, START_LOADING_BOOKSHELF_BOOKS, START_LOADING_ALL_BOOKS , START_LOADING_BOOK, START_LOADING_USER_BOOKSHELVES} from '../actions/load_actions';
import { RECEIVE_BOOKS, RECEIVE_BOOK } from '../actions/book_actions';
import { RECEIVE_BOOKSHELVES, RECEIVE_BOOKSHELF } from '../actions/bookshelf_actions';

const initialState = {
  booksLoading: false,
  bookshelvesLoading: false
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
    case RECEIVE_BOOKS:
    case RECEIVE_BOOK:
      return Object.assign({}, state, { booksLoading: false });
    case RECEIVE_BOOKSHELVES:
    case RECEIVE_BOOKSHELF:
      return Object.assign({}, state, { bookshelvesLoading: false });
    default:
      return state;
  }
};

export default LoadReducer;
