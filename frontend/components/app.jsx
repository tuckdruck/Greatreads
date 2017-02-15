import React from 'react';
import HomePageSignedIn from './home_page_signed_in';
import HomePageSignedOut from './home_page_signed_out';

const App = ({ loggedIn, logout }) => {
  let page;

  if (loggedIn) {
    page = (<HomePageSignedIn logout={logout}/>);
  }
  else {
    page = (<HomePageSignedOut />);
  }

  return(
    <div>
      {page}
    </div>
  );
};


export default App;
