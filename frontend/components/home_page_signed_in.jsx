import React from 'react';
import { hashHistory } from 'react-router';
import HeaderContainer from './header_container';
import BooksIndexContainer from './books_index_container';
import Footer from './footer';

export default class HomePageSignedIn extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home-page-signed-in">
        <HeaderContainer/>
        <BooksIndexContainer />
        <Footer />
      </div>
    );
  }

}
