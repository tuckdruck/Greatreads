import * as StatusAPIUtil from '../util/status_api_util';
import { receiveBook } from './book_actions';

export const updateStatus = (info) => {
  return (dispatch) => {
    return StatusAPIUtil.updateStatus(info).then((book) => { dispatch(receiveBook(book)); });
  };
};

export const createStatus = (info) => {
  return dispatch => {
    return StatusAPIUtil.createStatus(info).then((book) => { dispatch(receiveBook(book)); });
  };
};
