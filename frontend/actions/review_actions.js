import * as ReviewAPIUtil from '../util/review_api_util';
import { receiveBook } from './book_actions';

export const createReview = review => {
  return (dispatch) => {
    ReviewAPIUtil.createReview(review)
      .then((book) => { return dispatch(receiveBook(book)); });
  };
};

export const updateReview = review => {
  return dispatch => {
    return ReviewAPIUtil.updateReview(review)
      .then((book) => { return dispatch(receiveBook(book)); });
  };
};

export const deleteReview = reviewId => {
  return dispatch => {
    return ReviewAPIUtil.deleteReview(review)
      .then((book) => { return dispatch(receiveBook(book)); });
  };
};
