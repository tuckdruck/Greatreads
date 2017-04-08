import React from 'react';
import MyBooksIndexItem from './my_books_index_item';
import Modal from 'react-modal';

export default class MyBooksIndex extends React.Component {

  constructor(props) {
    super(props);
    this.booksRequested = false;
  }

  componentDidMount() {
    const {
      selectedBookshelf, fetchBookshelfBooks,
      fetchUserBooks, currentUser
    } = this.props;
    debugger

    this.booksRequested = true;
    if (selectedBookshelf) {
      return fetchBookshelfBooks(selectedBookshelf.id);
    }
    else { return fetchUserBooks(currentUser.id); }
  }

  bookIndexItems() {
    return this.props.books.map((book, index) => {
      return(
        <MyBooksIndexItem book={book}
          currentUser={this.props.currentUser} key={index}
        />
      );
    });
  }

  columnTitles() {
    const titles = [
      "cover", "title", "author", "avg rating",
      "shelves", "review", "date read"
    ];

    return titles.map((title, idx) => {
      let className = `${title.replace(" ", "-")} my-books`;
      if (title === " ") { className = "delete-book"; }
      return(<th key={idx} className={className}>{title}</th>);
    });
  }

  loading() {
    return this.props.loading.booksLoading || !this.booksRequested;
  }

  render () {
    if (this.loading()) { return(<div></div>); }
    else {
      return(
        <table className="my-books" id="table">
          <thead><tr>{this.columnTitles()}</tr></thead>
          <tbody>{this.bookIndexItems()}</tbody>
        </table>
      );
    }
  }

}
