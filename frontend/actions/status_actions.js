import * as StatusAPIUtil from '../util/status_api_util';
import { receiveBook, removeBook } from './book_actions';

export const updateStatus = (info) => {

  return (dispatch) => {
    return StatusAPIUtil
      .updateStatus(info)
      .then((book) => { dispatch(receiveBook(book)); });
  };

};

export const createStatus = (info) => {

  return dispatch => {
    return StatusAPIUtil
      .createStatus(info)
      .then((book) => { dispatch(receiveBook(book)); });
  };

};

export const deleteStatus = statusId => {

  return dispatch => {
    return StatusAPIUtil
      .deleteStatus(statusId)
      .then((book) => { dispatch(removeBook(book)); });
  };

};
