import { RECEIVE_BOOKSHELVES, RECEIVE_BOOKSHELF } from '../actions/bookshelf_actions';

const BookshelvesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_BOOKSHELVES:
      return action.bookshelves;
    case RECEIVE_BOOKSHELF:
      const copy = Object.assign({}, state);
      copy[action.bookshelf.id] = action.bookshelf;
      return copy;
    default:
      return state;
  }
};

export default BookshelvesReducer;
