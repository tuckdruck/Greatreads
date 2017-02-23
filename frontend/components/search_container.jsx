import React from 'react';
import { connect } from 'react-redux';

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = { inputVal: "" };
    this.selectBook = this.selectName.bind(this);
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

    this.props.books.forEach((book, index) => {
      let sub = book.slice(0, this.state.inputVal.length);

      if (sub.toLowerCase() === this.state.inputVal.toLowerCase()) {
        matches.push(book);
      }
    });

    if (matches.length === 0 && this.state.inputVal.length > 0) {
      matches.push('No matches');
    }

    return matches;
  }

  selectBook() {

  }

  render() {
    let results = this.matches().map((result, index) => {
      return (<li key={index} onClick={this.selectBook}>{result}</li>);
    });

    return(
      <div>
        <input onChange={this.handleInput} value={this.state.inputVal} placeholder="Search" />
        <ul>
          {results}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: this.props.booksForSearch,
    booksLoading: this.props.loading.booksLoading
  };
};

export default connect(mapStateToProps, null)(Search);
