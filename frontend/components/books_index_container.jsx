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
    return this.props.books.slice(index, index + 4).map((book, index) => {
      return (<Link className="book-index-item" key={index} to={`books/${book.id}`}>
        <img src={`${book.cover_image_url}`}/>
      </Link>);
    });
  }

  render() {
    if (this.props.loading.booksLoading) {
      return(<div></div>);
    }
    else {
      let index = 0;
      const divs = [];
      while (index < this.props.books.length) {
        divs.push(<div key={index} className="book-row-index">
          {this.bookRow(index)}
        </div>);
        index += 4;
      }

      return(
        <main className="main">
          <div className="all-books">
            {divs}
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
