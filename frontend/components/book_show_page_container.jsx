import React from 'react';
import { connect } from 'react-redux';
import HeaderContainer from './header_container';
import BookDetails from './book_details_container';
import Reviews from './reviews';
import Footer from './footer';
import { fetchBooks } from '../actions/book_actions';
import { fetchBookshelves } from '../actions/bookshelf_actions';

class BookShowPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (!this.props.book) {
      this.props.fetchBooks();
    }
    if (!this.props.bookshelves) {
      this.props.fetchBookshelves(this.props.currentUser.id);
    }
  }

  componentWillReceiveProps() {
    if (!this.props.book) {
      this.props.fetchBooks();
    }
  }

  render() {
    return(
      <main>
        <HeaderContainer />
        <BookDetails book={this.props.book} />
        <Reviews book={this.props.book}/>
        <Footer />
      </main>
    );
  }

}

const mapStateToProps = (state, ownProps) => {
  return {
    book: state.books[ownProps.params.bookId],
    loggedIn: !!state.session.currentUser,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBooks: () => { return dispatch(fetchBooks()); },
    fetchBookshelves: (userId) => { return dispatch(fetchBookshelves(userId)); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookShowPage);
