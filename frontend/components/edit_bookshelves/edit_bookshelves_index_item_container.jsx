import React from 'react';
import { connect } from 'react-redux';
import { updateBookshelf, deleteBookshelf, selectBookshelf } from '../../actions/bookshelf_actions';
import { receiveErrors } from '../../actions/error_actions';
import { hashHistory } from 'react-router';

class EditBookshelvesIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.defaultState();
    this.deleteBookshelf = this.deleteBookshelf.bind(this);
    this.updateBookshelfTitle = this.updateBookshelfTitle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.hideForm = this.hideForm.bind(this);
    this.showForm = this.showForm.bind(this);
    this.showBookshelfBooks = this.showBookshelfBooks.bind(this);
  }

  defaultState() {
    return {
      showForm: false,
      bookshelfTitle: this.props.bookshelf.title,
      errors: []
    };
  }

  deleteBookshelf() {
    const bookshelfId = this.props.bookshelf.id;
    this.props.deleteBookshelf(bookshelfId, this.props.currentUser.id);
  }

  updateBookshelfTitle(event) {
    this.setState({ bookshelfTitle: event.currentTarget.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.clearErrors();
    this.props.updateBookshelf({
      title: this.state.bookshelfTitle,
      id: this.props.bookshelf.id
    }, this.props.currentUser.id)
      .then(this.hideForm)
      .fail(() => { this.setState({errors: this.props.errors}); });
  }

  hideForm() {
    this.setState({
      showForm: false,
      bookshelfTitle: this.props.bookshelf.title,
      errors: []
    });
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.session.currentUser) { hashHistory.push("/"); }
    if (this.props.errors.length < 1) { this.setState({ errors: []}); }
  }

  showForm() {
    this.props.clearErrors();
    this.setState({ showForm: true });
  }

  showBookshelfBooks() {
    this.props.selectBookshelf(this.props.bookshelf);
    hashHistory.push("mybooks");
  }

  bookshelfTitleEntry() {
    const className = "editable-bookshelf-index-item";
    if (this.state.showForm) { return this.showFormBookshelfEntry(); }
    else { return this.hideFormBookshelfEntry(); }
  }

  showFormBookshelfEntry() {
    return(
      <span className="editable-bookshelf-index-item">
        {this.renameBookshelfForm()}{this.hideFormButton()}
      </span>
    );
  }

  hideFormBookshelfEntry() {
    return(
      <span className="editable-bookshelf-index-item">
        {this.linkToMyBooks()}{this.showFormButton()}
      </span>
    );
  }

  hideFormButton() {
    return(<button onClick={this.hideForm}>Cancel</button>);
  }

  showFormButton() {
    return(<button onClick={this.showForm}>rename</button>);
  }

  linkToMyBooks() {
    return(
      <button onClick={this.showBookshelfBooks}>
        {this.props.bookshelf.title}&nbsp;
      </button>
    );
  }

  renameBookshelfForm() {
    return(
      <form className="rename-bookshelf" onSubmit={this.handleSubmit}>
        <input type="text"
          value={this.state.bookshelfTitle}
          onChange={this.updateBookshelfTitle}
        />
        <button>Save</button>
      </form>
    );
  }

  deleteShelfButton() {
    return(
      <button
        className="delete-bookshelf"
        onClick={this.deleteBookshelf}
      >
        X
      </button>
    );
  }

  render() {
    return(
      <div className="rename-bookshelf-errors-container">
        <div className="rename-bookshelf-errors">
          {this.state.errors}
        </div>
        {this.deleteShelfButton()}
        {this.bookshelfTitleEntry()}
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    session: state.session,
    errors: state.errors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clearErrors: () => (dispatch(receiveErrors([]))),
    updateBookshelf: (bookshelf, userId) =>
      (dispatch(updateBookshelf(bookshelf, userId))),
    deleteBookshelf: (bookshelfId, userId) =>
      (dispatch(deleteBookshelf(bookshelfId, userId))),
    selectBookshelf: (bookshelf) =>
      (dispatch(selectBookshelf(bookshelf)))
  };
};

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(EditBookshelvesIndexItem);
