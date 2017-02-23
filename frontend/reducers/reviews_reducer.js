import { RECEIVE_REVIEWS } from '../actions/review_actions';

const ReviewsReducer = (state = {}, action) => {
  debugger
  switch(action.type) {
    case RECEIVE_REVIEWS:
      return action.reviews;
    default:
      return state;
  }
};

export default ReviewsReducer;
