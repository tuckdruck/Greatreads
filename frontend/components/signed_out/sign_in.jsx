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
    this.props.clearErrors();
    this.props.processForm(user).fail(() => { this.setState({ errors: this.props.errors }); });
  }


  componentWillReceiveProps() {
    if (this.props.errors.length < 1) {
      this.setState({ errors: []});
    }
  }



  render() {
    let errors = "";
    if (this.state.errors.length > 0) {
      errors = (<ul className="sign-in-errors">{this.state.errors}</ul>);
    }
    return(
      <div className="sign-in">
        {errors}
        <form className="sign-in" onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.username} placeholder="Username" onChange={this.update("username")} />

          <input type={this.state.passwordView} placeholder="Password" value={this.state.password} onChange={this.update("password")}/>

          <button className="sign-in-button">Sign In</button>
        </form>

      </div>
    );
  }
}
