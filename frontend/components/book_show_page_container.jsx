import React from 'react';
import { connect } from 'react-redux';
import HeaderContainer from './header_container';
import BookDetails from './book_details';
import MyActivity from './my_activity';
import Reviews from './reviews';
import Footer from './footer';

const BookShowPage = props => {
  return(
    <main>
      <HeaderContainer />
      <BookDetails book={props.book} />
      <MyActivity book={props.book}/>
      <Reviews book={props.book}/>
      <Footer />
    </main>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    book: state.books[ownProps.params.bookId]
  };
};

export default connecdt(mapStateToProps, null)(BookShowPage);
