import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';

const initialState = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = initialState, action) => {
  Object.freeze(state);
  let copy;

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      copy = Object.assign({}, state);
      copy.currentUser = action.currentUser;
      copy.errors = [];
      return copy;
    case RECEIVE_ERRORS:
      copy = Object.assign({}, state);
      copy.errors = action.errors;
      copy.currentUser = null;
      return copy;
    default:
      return state;
  }
};

export default SessionReducer;
