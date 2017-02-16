import React from 'react';
import Header from './header';
import Sidebar from './sidebar';
import MyBooksIndexContainer from './my_books_index_container';
import Footer from './footer';


const MyBooksPage = (props) => {
  return(
    <div>
      <Header />
      <Sidebar />
      <MyBooksIndexContainer />
      <Footer />
    </div>
  );
};

export default MyBooksPage;
