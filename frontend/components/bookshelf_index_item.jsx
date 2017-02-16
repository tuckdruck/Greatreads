import React from 'react';

export default class BookshelfIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.filterBooks = this.filterBooks.bind(this);
  }

  filterBooks() {
    this.props.fetchBookshelfBooks(this.props.bookshelf.id);
  }

  render() {
    return(
      <button onClick={this.filterBooks}>
        {this.props.bookshelf.title}
      </button>
    );
  }

}
