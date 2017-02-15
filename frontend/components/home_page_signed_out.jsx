import React from 'react';
import SignInContainer from './sign_in_container';
import SignUpContainer from './sign_up_container';

export default class HomePageSignedOut extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="overall-header">
        <header className="home-page-signed-out">
          <h1 className="logo">great<strong>reads</strong></h1>
          <SignInContainer />
        </header>
        <SignUpContainer />
      </div>
    );
  }
}
