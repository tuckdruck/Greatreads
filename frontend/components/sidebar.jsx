import React from 'react';
import BookshelfIndexContainer from './bookshelf_index_container';

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showAddShelfForm: false, shelfTitle: ""};
    this.toggleAddShelfForm = this.toggleAddShelfForm.bind(this);
    this.updateShelfTitle = this.updateShelfTitle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  togleAddShelfForm() {
    this.setState({ showAddShelfForm: true });
  }

  updateShelfTitle(e) {
    this.setState({ shelfTitle: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const bookshelf = { title: this.state.shelfTitle };
    this.props.createBookshelf(bookshelf);
  }

  render() {
    let form;

    if (this.state.showAddShelfForm) {
      form = (
        <div>
          <h3>Add a Shelf:</h3>
          <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.shelfTitle} onChange={this.updateShelfTitle}/>
            <button>Add</button>
          </form>
        </div>
      );
    } else {
      form = "";
    }

    return(
      <div>
        <h1>bookshelves</h1>
        <ul>
          <li>all</li>
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
