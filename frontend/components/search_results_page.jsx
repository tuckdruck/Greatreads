import React from 'react';
import { connect } from 'react-redux';
import booksArray from '../selectors/books_selector';
import HeaderContainer from './header_container';
import Footer from './footer';
import { hashHistory } from 'react-router';


class SearchResultsPage extends React.Component {

  constructor(props) {
    super(props);
    this.selectBook = this.selectBook.bind(this);
  }

  selectBook(bookId) {
    return (e) => {
      hashHistory.push(`books/${bookId}`);
    };
  }

  render() {
    let searchResults;
    if (this.props.books.length > 0) {
      searchResults = this.props.books.map((book, index) => {
        return (
          <li className="results searchpage" key={index}>
            <img src={book.cover_image_url} className="search-thumb" onClick={this.selectBook(book.id).bind(this)}/>
            <div>
              <h3 onClick={this.selectBook(book.id).bind(this)}>{book.title}</h3>
              <span>by {book.author}</span>
              <span>{book.average_rating} avg rating</span>
            </div>
          </li>);
      });
    }
    else {
      searchResults = (<li>No results found.</li>);
    }


    return(
      <main className="overall-search">
        <HeaderContainer />
        <main className="searchpage-main">
          <section className="main-content-search-results">
            <h1>Search Results</h1>
            <ul>
              {searchResults}
            </ul>
          </section>
        </main>
        <Footer />
      </main>
    );
  }


}


const mapStateToProps = state => {
  return {
    books: booksArray(state.booksForSearch)
  };
};

export default connect(mapStateToProps, null)(SearchResultsPage);
