import React from 'react';
import { connect } from 'react-redux';
import { createBookshelf } from '../actions/bookshelf_actions';

class AddShelfForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { shelfTitle: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateShelfTitle = this.updateShelfTitle.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const bookshelf = { title: this.state.shelfTitle };

    if (this.props.addBookshelfToBook) {
      return this.props.createBookshelf(bookshelf).then((action) => {
        return this.props.addBookshelfToBook(action.bookshelf.id, true);
      });
    } else {
      this.props.createBookshelf(bookshelf, true);
    }
  }

  updateShelfTitle(e) {
    this.setState({ shelfTitle: e.currentTarget.value });
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.shelfTitle} onChange={this.updateShelfTitle}/>
        <button>Add</button>
      </form>
    );
  }
}


const mapDispatchToProps = dispatch => {
  return {
    createBookshelf: (bookshelf) => { return dispatch(createBookshelf(bookshelf)); },
  };
};

export default connect(null, mapDispatchToProps)(AddShelfForm);
