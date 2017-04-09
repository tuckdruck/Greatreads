import React from 'react';

export default class SignUp extends React.Component {

  constructor(props) {
    super(props);
    this.state = { username: "", password: "" , errors: []};
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.guestSignIn = this.guestSignIn.bind(this);
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
    this.props.clearErrors();
    this.props.signup(this.state)
      .fail(() => { this.setState({ errors: this.props.errors }); });
  }

  componentWillReceiveProps() {
    if (this.props.errors.length < 1) {
      this.setState({ errors: []});
    }
  }

  guestSignIn() {
    const user = {
      username: "guest",
      password: "magichat12"
    };
    this.props.signin(user);
  }

  errors() {
    if (this.state.errors.length > 0) {
      const errors = this.state.errors.map((error, index) => {
        return (<li key={index}>{error}</li>);
      });
      return(<ul className="sign-up-errors">{errors}</ul>);
    }
    else {
      return "";
    }
  }

  usernameField() {
    return(
      <input
        placeholder="Username"
        type="text"
        value={this.state.username}
        onChange={this.update("username")}/>
    )
  }

  passwordField() {
    return(
      <input
        placeholder="Password"
        type={this.state.passwordView}
        value={this.state.password}
        onChange={this.update("password")}/>
    );
  }

  signUpForm() {
    return(
      <form className="signup" onSubmit={this.handleSubmit}>
        {this.usernameField()}
        {this.passwordField()}
        <br/>
        <button className="big-gold">Sign up</button>
      </form>
    )
  }

  guestSignInButton() {
    return(
      <button className="big-gold guest" onClick={this.guestSignIn} >
        Guest
      </button>
    );
  }

  banner() {
    return(
      <section className="big-text">
        Meet your next favorite book.
      </section>
    );
  }

  render() {
    return(
      <div className="sign-up">
        {this.banner()}
        <section className="sign-up">
          <h2>New here? Create a free account!</h2>
          {this.errors()}{this.signUpForm()}{this.guestSignInButton()}
        </section>
      </div>
    );
  }

}
