import { CHANGE_LOADED_STATUS } from '../actions/load_actions';

const LoadReducer = (state = false, action) => {
  switch (action.type) {
    case CHANGE_LOADED_STATUS:
      return action.status;
    default:
      return state;
  }
};

export default LoadReducer;
