import React from 'react';
import HeaderContainer from '../header_container';
import BooksFilterPaneContainer from './books_filter_pane_container';
import Footer from '../footer';

const MyBooksPage = (props) => {
  return(
    <div>
      <HeaderContainer pathname="mybooks"/>
      <BooksFilterPaneContainer createBookshelf={props.createBookshelf} fetchUserBooks={props.fetchUserBooks} currentUser={props.currentUser}/>
      <Footer />
    </div>
  );
};

export default MyBooksPage;
