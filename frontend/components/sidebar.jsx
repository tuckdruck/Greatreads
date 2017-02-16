import React from 'react';
import BookshelfIndexContainer from './bookshelf_index_container';
import AddShelfFormContainer from './add_shelf_form_container';

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showAddShelfForm: false, shelfTitle: ""};
    this.toggleAddShelfForm = this.toggleAddShelfForm.bind(this);
    this.fetchUserBooks = this.fetchUserBooks.bind(this);
  }

  toggleAddShelfForm() {
    this.setState({ showAddShelfForm: true });
  }

  fetchUserBooks() {
    return this.props.fetchUserBooks(this.props.currentUser.id);
  }

  render() {
    let form;

    if (this.state.showAddShelfForm) {
      form = (
        <div>
          <h3>Add a Shelf:</h3>
          <AddShelfFormContainer />
        </div>
      );
    } else {
      form = "";
    }

    return(
      <div>
        <h1>bookshelves</h1>
        <ul>
          <li><button onClick={this.fetchUserBooks}>all</button></li>
          <li>read</li>
          <li>currently-reading</li>
          <li>to-read</li>
        </ul>
        <BookshelfIndexContainer />
        <button onClick={this.toggleAddShelfForm}>Add Shelf</button>
        {form}
      </div>
    );
  }

}
