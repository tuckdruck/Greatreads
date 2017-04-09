import React from 'react';
import { hashHistory } from 'react-router';


export default class SignIn extends React.Component {

  constructor(props) {
    super(props);
    this.default = { username: "", password: "" , errors: []};
    this.state = this.default;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(type) {
    return (event) => {
      let value = event.currentTarget.value;
      if (type === "password") {
        this.setState({ [type]: value , passwordView: "password"});
      } else {
        this.setState({ [type]: value });
      }
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.clearErrors();
    this.props.processForm(user)
      .fail(() => { this.setState({ errors: this.props.errors }); });
  }


  componentWillReceiveProps() {
    if (this.props.errors.length < 1) {
      this.setState({ errors: []});
    }
  }

  usernameField() {
    return(
      <input
        type="text"
        value={this.state.username}
        placeholder="Username"
        onChange={this.update("username")}
      />
    );
  }

  passwordField() {
    return(
      <input
        type={this.state.passwordView}
        placeholder="Password"
        value={this.state.password}
        onChange={this.update("password")}/>
    );
  }

  errors() {
    if (this.state.errors.length > 0) {
      return(<ul className="sign-in-errors">{this.state.errors}</ul>);
    } else { return ""; }
  }

  render() {
    return(
      <div className="sign-in">
        {this.errors()}
        <form className="sign-in" onSubmit={this.handleSubmit}>
          {this.usernameField()}{this.passwordField()}
          <button className="sign-in-button">Sign In</button>
        </form>
      </div>
    );
  }

}
