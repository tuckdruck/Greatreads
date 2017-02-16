import { connect } from 'react-redux';
import FieldsForm from './fields_form';
import { updateBook } from '../actions/book_actions';
import bookshelvesArray from '../selectors/bookshelves_selector';

const mapStateToProps = state => {
  return {
    bookshelves: bookshelvesArray(state.bookshelves),
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateBook: (info) => {
      return dispatch(updateBook(info));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FieldsForm);
