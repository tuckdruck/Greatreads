import { RECEIVE_BOOKS_FOR_SEARCH } from '../actions/book_actions';

const BooksForSearchReducer = (state = {}, action) => {
  switch (action.type){
    case RECEIVE_BOOKS_FOR_SEARCH:
      return action.books;
    default:
      return state;
  }
}

export default BooksForSearchReducer;
