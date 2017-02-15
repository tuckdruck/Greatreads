import React from 'react';
import { hashHistory } from 'react-router';
import Header from './header';

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
        <Header logout={this.props.logout}/>
        home page signed in
      </div>
    );
  }

}
