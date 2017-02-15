import React from 'react';

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(type) {
    return (e) => {
      this.setState({ [type]: e.currentTarget.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state);
  }

  render() {
    return(
      <div className="sign-up">

        <section className="big-text">
          Meet your next favorite book.
        </section>

        <section>
          <h2>New here? Create a free account!</h2>
          <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.username} onChange={this.update("username")}/>

            <input type="text" value={this.state.password} onChange={this.update("password")}/>

            <input type="submit" value="Sign Up"/>
          </form>
        </section>

      </div>
    );
  }
}
