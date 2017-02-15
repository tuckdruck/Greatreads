import React from 'react';
import { hashHistory } from 'react-router';

export default class HomePageSignedIn extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.logout().then(() => { hashHistory.push("logout"); });
  }

  render() {
    return (
      <div>
        home page signed in
        <button onClick={this.handleSubmit}>Log Out</button>
      </div>
    );
  }

}
