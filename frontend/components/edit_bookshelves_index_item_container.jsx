import React from 'react';
import { connect } from 'react-redux';
import { updateBookshelf, deleteBookshelf } from '../actions/bookshelf_actions';
import { receiveErrors } from '../actions/error_actions';
import { hashHistory } from 'react-router';

class EditBookshelvesIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showForm: false, bookshelfTitle: this.props.bookshelf.title, errors: []};
    this.deleteBookshelf = this.deleteBookshelf.bind(this);
    this.updateBookshelfTitle = this.updateBookshelfTitle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.hideForm = this.hideForm.bind(this);
    this.showForm = this.showForm.bind(this);
  }

  deleteBookshelf() {
    this.props.deleteBookshelf(this.props.bookshelf.id, this.props.session.currentUser.id);
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
    }, this.props.session.currentUser.id)
      .then(this.hideForm)
      .fail(() => { this.setState({errors: this.props.errors}); });
  }

  hideForm() {
    this.setState({ showForm: false, bookshelfTitle: this.props.bookshelf.title, errors: []});
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.session.currentUser) {
      hashHistory.push("/");
    }
    if (this.props.errors.length < 1) {
      this.setState({ errors: []});
    }
  }

  showForm() {
    this.props.clearErrors();
    this.setState({ showForm: true });
  }

  render() {
    let itemDisplay;
    if (this.state.showForm) {
      itemDisplay = (
        <span>
          <form className="rename-bookshelf" onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.bookshelfTitle} onChange={this.updateBookshelfTitle}/>
            <button>Save</button>
          </form>
          <button onClick={this.hideForm}>Cancel</button>
          {this.state.errors}
        </span>
      );
    }
    else {
      itemDisplay = (
        <span>
          <button>{this.props.bookshelf.title}&nbsp;</button>
          <button onClick={this.showForm}>rename</button>
        </span>
      )
    }

    return(
      <div>
        <button onClick={this.deleteBookshelf}>X</button>
        {itemDisplay}
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    session: state.session,
    errors: state.errors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clearErrors: () => { return dispatch(receiveErrors([])); },
    updateBookshelf: (bookshelf, userId) => { return dispatch(updateBookshelf(bookshelf, userId)); },
    deleteBookshelf: (bookshelfId, userId) => { return dispatch(deleteBookshelf(bookshelfId, userId)); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditBookshelvesIndexItem);
