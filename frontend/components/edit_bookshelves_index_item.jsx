import React from 'react';
import { connect } from 'react-redux';

class EditBookshelvesIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showForm: false, bookshelfTitle: this.props.bookshelf.title};
    this.deleteBookshelf = this.deleteBookshelf.bind(this);
    this.updateBookshelf = this.updateBookshelf.bind(this);
    this.updateBookshelfTitle = this.updateBookshelfTitle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.hideForm = this.hideForm.bind(this);
    this.showForm = this.showForm.bind(this);
  }

  deleteBookshelf() {
    this.props.deleteBookshelf(this.props.bookshelf.id, this.props.userId);
  }

  updateBookshelf() {
    this.props.updateBookshelf(this.props.bookshelf.id, this.props.userId)
  }

  updateBookshelfTitle(event) {
    this.setState({ bookshelfTitle: event.currentTarget.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.updateBookshelf(this.props.bookshelf.id);
  }

  hideForm() {
    this.setState({ showForm: false});
  }

  showForm() {
    this.setState({ showForm: true});
  }

  render() {
    let itemDisplay;
    if (this.state.showForm) {
      itemDisplay = (
        <div>
          <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.bookshelfTitle} onChange={this.updateBookshelfTitle}/>
            <button>Save</button>
          </form>
          <button onClick={this.hideForm}>Cancel</button>
        </div>
      );
    }
    else {
      itemDisplay = (
        <div>
          <button>{this.props.bookshelf.title}&nbsp;</button>
          <button onClick={this.showForm}>rename</button>
        </div>
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
    userId: state.session.currentUser.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateBookshelf: (bookshelf, userId) => { return dispatch(updateBookshelf(bookshelf, userId)); },
    deleteBookshelf: (bookshelfId, userId) => { return dispatch(deleteBookshelf(bookshelfId, userId)); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditBookshelvesIndexItem);
