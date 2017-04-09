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

  render() {
    const divs = [];

    if (this.loading()) { return(<div className="loading"></div>); }
    else {
      for (let i = 0; i < this.props.books.length; i += 4) {
        divs.push(
          <div key={i} className="book-row-index">{this.bookRow(i)}
          </div>
        );
      }

      return(
        <main className="main">
          <div className="all-books">{divs}</div>
        </main>
      );
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
