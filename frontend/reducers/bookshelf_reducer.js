import { SELECT_BOOKSHELF } from '../actions/bookshelf_actions';

const BookshelfReducer = (state = null, action) => {
  switch(action.type) {
    case SELECT_BOOKSHELF:
      return action.bookshelf;
    default:
      return state;
  }
};

export default BookshelfReducer;
