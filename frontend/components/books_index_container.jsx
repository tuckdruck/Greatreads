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

  render() {
    if (this.props.loading.booksLoading) {
      return(<div></div>);
    }
    else {
      const bookLinks = this.props.books.map((book, index) => {

        return(
          <Link className="book-index-item" key={index} to={`books/${book.id}`}>
            <img src={`${book.cover_image_url}`}/>
          </Link>
        );

      });

      return(
        <main className="main">
          <div className="all-books">
            {bookLinks}
          </div>
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
