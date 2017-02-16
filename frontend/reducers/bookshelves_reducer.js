import { RECEIVE_BOOKSHELVES } from '../actions/bookshelf_actions';

const BookshelvesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_BOOKSHELVES:
      return action.bookshelves;
    default:
      return state;
  }
};

export default BookshelvesReducer;
