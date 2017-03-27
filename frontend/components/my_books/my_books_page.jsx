import React from 'react';
import HeaderContainer from '../header_container';
import BooksFilterPaneContainer from './books_filter_pane_container';
import Footer from '../footer';

const MyBooksPage = (props) => {
  return(
    <div>
      <BooksFilterPaneContainer createBookshelf={props.createBookshelf} fetchUserBooks={props.fetchUserBooks} currentUser={props.currentUser}/>
    </div>
  );
};

export default MyBooksPage;
