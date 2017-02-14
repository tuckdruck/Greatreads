import React from 'react';
import SignInContainer from './sign_in_container';

export default class HomePageSignedOut extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <SignInContainer />

      </div>
    );
  }
}
