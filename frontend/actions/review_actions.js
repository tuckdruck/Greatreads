import * as ReviewAPIUtil from '../util/review_api_util';
import { receiveBook } from './book_actions';
import { startLoadingReviews } from './load_actions';

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";

export const receiveReviews = (reviews) => {
  return {
    type: RECEIVE_REVIEWS,
    reviews: reviews
  };
};

export const fetchReviews = (bookId) => {
  return (dispatch) => {
    dispatch(startLoadingReviews());
    ReviewAPIUtil.fetchBookReviews(bookId)
      .then((reviews) => { return dispatch(receiveReviews(reviews)); });
  };
};

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
