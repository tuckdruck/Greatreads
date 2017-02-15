import React from 'react';
import { hashHistory } from 'react-router';


export default class BigSignIn extends React.Component {
  constructor(props) {
    super(props);
    this.default = { username: "Username", password: "Password" };
    this.state = this.default;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.clearField = this.clearField.bind(this);
  }

  update(type) {
    let self = this;
    return function(event) {
      let value;
      if (type === "password") {
        self.setState({ [type]: event.currentTarget.value , passwordView: "password"});
      } else {
        self.setState({ [type]: event.currentTarget.value });
      }
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => { hashHistory.push("/"); });
  }

  clearField(type) {
    return (e) => {
      this.setState({ [type]: "" });
    };
  }

  render() {

    return(
      <div>
        <ul>{this.props.errors}</ul>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.username} onFocus={this.clearField("username")} onChange={this.update("username")}/>

          <input type={this.state.passwordView} value={this.state.password} onFocus={this.clearField("password")} onChange={this.update("password")}/>

          <input className="sign-in-button" type="submit" value="Sign in"/>
        </form>
      </div>
    );
  }
}
