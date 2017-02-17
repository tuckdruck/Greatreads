import { RECEIVE_BOOKSHELVES, RECEIVE_BOOKSHELF, REMOVE_BOOKSHELF } from '../actions/bookshelf_actions';

const BookshelvesReducer = (state = {}, action) => {
  Object.freeze(state);
  let copy;

  switch(action.type) {
    case RECEIVE_BOOKSHELVES:
      return action.bookshelves;
    case RECEIVE_BOOKSHELF:
      copy = Object.assign({}, state);
      copy[action.bookshelf.id] = action.bookshelf;
      return copy;
    case REMOVE_BOOKSHELF:
      copy = Object.assign({}, state);
      delete copy[action.bookshelf.id];
      return copy;
    default:
      return state;
  }
};

export default BookshelvesReducer;
