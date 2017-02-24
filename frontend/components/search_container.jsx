import React from 'react';
import { connect } from 'react-redux';
import booksArray from '../selectors/books_selector';
import { fetchBooksForSearch, receiveBooksForSearch } from '../actions/book_actions';
import { hashHistory } from 'react-router';
import ReactDOM from 'react-dom';

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = { inputVal: "", showResults: true };
    this.selectBook = this.selectBook.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.redirectToResults = this.redirectToResults.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    document.addEventListener('click', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick, false);
  }

  handleClick(e) {
    if (!ReactDOM.findDOMNode(this).contains(e.target)) {
      this.setState({ showResults: false });
    }
  }

  handleInput(event) {
    this.setState({ inputVal: event.currentTarget.value, showResults: true });
    if (event.currentTarget.value.length > 0) {
      this.props.fetchBooksForSearch(event.currentTarget.value);
    } else {
      this.props.receiveBooksForSearch({});
    }
  }

  selectBook(bookId) {
    return (e) => {
      if (!this.props.bookId || (this.props.bookId && this.props.bookId !== bookId)) {
        hashHistory.push(`books/${bookId}`);
      }

    };
  }

  redirectToResults() {
    hashHistory.push("search");
  }

  render() {
    let bookResults;
    if (this.state.inputVal.length > 0 && this.state.showResults) {
      bookResults = this.props.books.slice(0, 5).map((book, index) => {
        return (
          <li className="results searchbar" key={index} onClick={this.selectBook(book.id).bind(this)}>
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
        <button className="magnifying-glass" onClick={this.redirectToResults}>🔍</button>
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
    fetchBooksForSearch: (searchString) => { return dispatch(fetchBooksForSearch(searchString)); },
    receiveBooksForSearch: (books) => { return dispatch(receiveBooksForSearch(books)); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
