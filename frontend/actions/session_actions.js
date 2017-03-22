import * as SessionAPIUtil from '../util/session_api_util';
import { receiveErrors } from './error_actions';
import { hashHistory } from 'react-router';
import { fetchBookshelves } from './bookshelf_actions';
import { fetchBooks } from './book_actions';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

export const receiveCurrentUser = currentUser => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const login = user => {

  return function(dispatch) {
    return SessionAPIUtil.login(user)
      .then((user) => {
        return dispatch(receiveCurrentUser(user));
      })
      .fail((errors) => {
        return dispatch(receiveErrors(errors.responseText));
      });
  };

};

export const logout = () => {

  return function(dispatch) {
    return SessionAPIUtil.logout()
      .then((user) => { return dispatch(receiveCurrentUser(null)); })
      .fail((errors) => {
        return dispatch(receiveErrors(errors.responseJSON));
      });
  };

};

export const signup = user => {

  return function(dispatch) {
    return SessionAPIUtil.signup(user)
      .then((user) => { return dispatch(receiveCurrentUser(user)); })
      .fail((errors) => {
        return dispatch(receiveErrors(errors.responseJSON));
      });
  };

};
