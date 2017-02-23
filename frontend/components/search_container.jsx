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

  componentDidMount() {
    this.props.fetchBooksForSearch();
  }

  handleInput(event) {
    this.setState({ inputVal: event.currentTarget.value });
  }

  matches() {
    const matches = [];

    if (this.state.inputVal.length > 0) {
      this.props.books.forEach((book, index) => {
        let sub = book.title.slice(0, this.state.inputVal.length);

        if (sub.toLowerCase() === this.state.inputVal.toLowerCase()) {
          matches.push(book);
        }
      });

    }

    return matches;
  }

  selectBook(bookId) {
    return (e) => {
      hashHistory.push(`books/${bookId}`);
    };
  }

  render() {
    let bookResults = this.matches().map((book, index) => {
      return (<li key={index} onClick={this.selectBook(book.id)}>{book.title}</li>);
    });

    return(
      <div className="search">
        <input onChange={this.handleInput} value={this.state.inputVal} placeholder="Search" />
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
    fetchBooksForSearch: () => { return dispatch(fetchBooksForSearch()); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
