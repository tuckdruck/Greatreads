import React from 'react';
import { connect } from 'react-redux';
import HeaderContainer from '../header_container';
import BookDetails from './book_details_container';
import Reviews from '../reviews';
import Footer from '../footer';
import { fetchBooks } from '../../actions/book_actions';
import { fetchBookshelves } from '../../actions/bookshelf_actions';
import { fetchReviews } from '../../actions/review_actions';
import { reviewsArray } from '../../selectors/reviews_selector';

class BookShowPage extends React.Component {

  constructor(props) {
    super(props);
  }

  loggedInRefresh() {
    return !this.props.book &&
      this.props.loggedIn &&
      !this.props.loading.booksLoading &&
      !this.props.loading.bookshelvesLoading;
  }

  loggedOutRefresh() {
    return !this.props.book &&
      !this.props.loggedIn &&
      !this.props.loading.booksLoading;
  }

  bookshelvesNotFetched() {
    return this.props.book &&
      this.props.loggedIn &&
      !this.props.loading.bookshelvesLoading;
  }

  logIn(nextProps) {
    return !this.props.loggedIn &&
      nextProps.loggedIn &&
      !this.props.loading.booksLoading &&
      !this.props.loading.bookshelvesLoading;
  }

  componentDidMount() {
    if (this.loggedInRefresh()) {
      this.props.fetchBooks();
      this.props.fetchBookshelves(this.props.currentUser.id);
    }
    else if (this.loggedOutRefresh()) { this.props.fetchBooks(); }
    else if (this.bookshelvesNotFetched()) {
      this.props.fetchBookshelves(this.props.currentUser.id);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.logIn(nextProps)) {
      this.props.fetchBooks();
      this.props.fetchBookshelves(nextProps.currentUser.id);
    } else if (!this.props.book && !this.props.loading.booksLoading) {
      this.props.fetchBooks();
    }
  }

  loading() {
    return this.props.loading.booksLoading ||
    this.props.loading.bookshelvesLoading ||
    !this.props.book;
  }

  reviews() {
    return(
      <Reviews
        book={this.props.book}
        loading={this.props.loading}
        reviews={this.props.reviews}
        fetchReviews={this.props.fetchReviews}
      />
    );
  }

  mainContent() {
    return(
      <main className="body">
        <BookDetails book={this.props.book} />{this.reviews()}
      </main>
    );
  }

  render() {
    if (this.loading()) { return(<div className="loading"></div>); }
    else {
      return(
        <main className="overall">
          {this.mainContent()}
        </main>
      );
    }
  }

}

const mapStateToProps = (state, ownProps) => {
  return {
    book: state.books[ownProps.params.bookId],
    loggedIn: !!state.session.currentUser,
    currentUser: state.session.currentUser,
    bookshelves: state.bookshelves,
    loading: state.loading,
    reviews: reviewsArray(state.reviews)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBooks: () => { return dispatch(fetchBooks()); },
    fetchBookshelves: (userId) => (dispatch(fetchBookshelves(userId))),
    fetchReviews: (bookId) => (dispatch(fetchReviews(bookId)))
  };
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(BookShowPage);
