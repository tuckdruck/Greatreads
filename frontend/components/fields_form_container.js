import { connect } from 'react-redux';
import FieldsForm from './fields_form';
import { updateBook } from '../actions/book_actions';
import { updateStatus, createStatus } from '../actions/status_actions';
import { bookshelvesArray } from '../selectors/bookshelves_selector';
import { receiveErrors } from '../actions/error_actions';

const mapStateToProps = state => {
  return {
    bookshelves: bookshelvesArray(state.bookshelves),
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateBook: (info) => { return dispatch(updateBook(info)); },
    updateStatus: (info) => { return dispatch(updateStatus(info)); },
    createStatus: (info) => { return dispatch(createStatus(info)); },
    clearErrors: () => { return dispatch(receiveErrors([])); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FieldsForm);
