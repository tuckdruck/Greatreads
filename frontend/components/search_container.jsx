import React from 'react';
import { connect } from 'react-redux';
import booksArray from '../selectors/books_selector';
import { fetchBooksForSearch } from '../actions/book_actions';
import { hashHistory } from 'react-router';

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = { inputVal: "" };
    this.selectBook = this.selectBook.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    this.setState({ inputVal: event.currentTarget.value });
    if (event.currentTarget.value.length > 0) {
      this.props.fetchBooksForSearch(event.currentTarget.value);
    }
  }

  selectBook(bookId) {
    return (e) => {
      console.log(this.props);
      if (!this.props.bookId || (this.props.bookId && this.props.bookId !== bookId)) {
        hashHistory.push(`books/${bookId}`);
      }

    };
  }

  render() {
    let bookResults;
    if (this.state.inputVal.length > 0) {
      bookResults = this.props.books.map((book, index) => {
        return (
          <li className="results" key={index} onClick={this.selectBook(book.id).bind(this)}>
            <h3>{book.title}</h3>
            <span>by {book.author}</span>
          </li>);
      }, this);
    } else {
      bookResults = (<li></li>);
    }


    return(
      <div className="search">
        <input onChange={this.handleInput} value={this.state.inputVal} placeholder="Search books" />
        <ul className="search-results">
          {bookResults}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: booksArray(state.booksForSearch),
    booksLoading: state.loading.booksLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBooksForSearch: (searchString) => { return dispatch(fetchBooksForSearch(searchString)); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
