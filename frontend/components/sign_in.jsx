import React from 'react';
import { hashHistory } from 'react-router';

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "username", password: "password" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirect = this.redirect.bind(this);
    this.update = this.update.bind(this);
  }

  update(type) {
    let self = this;
    return function(event) {
      self.setState({ [type]: event.currentTarget.value });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => { this.redirect() });
  }

  redirect() {
    hashHistory.push("/books/home");
  }

  render() {
    const errorLis = this.props.errors.map((error, index) => {
      return (<li>${error}</li>);
    });

    return(
      <div>
        <ul>{errorLis}</ul>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.username} onChange={this.update("username")}/>

          <input type="text" value={this.state.password} onChange={this.update("password")}/>

          <input type="submit" value="Sign in"/>
        </form>
      </div>
    );
  }
}
