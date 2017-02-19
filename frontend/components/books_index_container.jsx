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
    const bookLinks = this.props.books.map((book) => {

      return(
        <Link key={book.id} to={`books/${book.id}`}>
          <img src={`${book.cover_image_url}`}/>
        </Link>
      );

    });

    return(<div>{bookLinks}</div>);
  }

}

const mapStateToProps = state => {
  return {
    books: booksArray(state.books)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBooks: () => { return dispatch(fetchBooks()); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksIndex);
