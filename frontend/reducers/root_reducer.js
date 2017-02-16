import SessionReducer from './session_reducer';
import BookshelvesReducer from './bookshelves_reducer';
import BooksReducer from './books_reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  session: SessionReducer,
  bookshelves: BookshelvesReducer,
  books: BooksReducer
});
