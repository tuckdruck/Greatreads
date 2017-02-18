import { RECEIVE_ERRORS } from '../actions/bookshelf_actions';

const ErrorsReducer = (state = [], action) => {
  switch(action.type) {
    case RECEIVE_ERRORS:
      if (action.errors === "Invalid username/password combination" || action.errors === []) {
        return action.errors;
      }
      let errors = Object.keys(action.errors).map((prop) => { return `${prop} ${action.errors[prop]}`; });
      return errors;
    default:
      return state;
  }
};

export default ErrorsReducer;
