import React from 'react';
import { hashHistory } from 'react-router';
import HeaderContainer from './header_container';
import BooksIndexContainer from './books_index_container';

export default class HomePageSignedIn extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    return (
      <div>
        <HeaderContainer/>
        <BooksIndexContainer />
      </div>
    );
  }

}
