import React from 'react';
import { fetchBooks } from '../actions/book_actions';
import booksArray from '../selectors/books_selector';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class BooksIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBooks();
  }

  bookRow(index) {
    return this.props.books.slice(index, index + 4).map((book, i) => {
      return (
        <Link className="book-item" key={i} to={`books/${book.id}`}>
          <img src={`${book.cover_image_url}`}/>
        </Link>
      );
    });
  }

  loading() {
    return this.props.loading.booksLoading;
  }

  bookRows() {
    const divs = [];

    for (let i = 0; i < this.props.books.length; i++) {
      if (i % 4 === 0) {
        divs.push(
          <div key={i} className="book-row">{this.bookRow(i)}</div>
        );
      }
    }

    return divs;
  }

  render() {
    if (this.loading()) { return(<div className="loading"></div>); }
    else {
      return(<div className="all-books">{this.bookRows()}</div>);
    }
  }

}

const mapStateToProps = state => {
  return {
    books: booksArray(state.books),
    loading: state.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBooks: () => { return dispatch(fetchBooks()); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksIndex);
