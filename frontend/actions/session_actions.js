import * as SessionAPIUtil from '../util/session_api_util';
import { receiveErrors } from './error_actions';
import { hashHistory } from 'react-router';

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
      .then((user) => { return dispatch(receiveCurrentUser(user)); })
      .fail((errors) => { return dispatch(receiveErrors(errors.responseText)); });
  };
};

export const logout = () => {
  return function(dispatch) {
    return SessionAPIUtil.logout()
      .then((user) => { return dispatch(receiveCurrentUser(null)); })
      .then(() => { return hashHistory.push("/"); })
      .fail((errors) => { return dispatch(receiveErrors(errors.responseJSON)); });
  };
};

export const signup = user => {
  return function(dispatch) {
    return SessionAPIUtil.signup(user)
      .then((user) => { return dispatch(receiveCurrentUser(user)); })
      .fail((errors) => { return dispatch(receiveErrors(errors.responseJSON)); });
  };
};
