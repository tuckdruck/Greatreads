import React from 'react';
import Header from './header';
import BooksFilterPaneContainer from './books_filter_pane_container';
import Footer from './footer';

const MyBooksPage = (props) => {
  return(
    <div>
      <Header logout={props.logout}/>
      <BooksFilterPaneContainer createBookshelf={props.createBookshelf} fetchUserBooks={props.fetchUserBooks} currentUser={props.currentUser}/>
      <Footer />
    </div>
  );
};

export default MyBooksPage;
