import React from 'react';
import HomePageSignedIn from './home_page_signed_in';
import HomePageSignedOut from './signed_out/home_page_signed_out';
import HeaderContainer from './header_container';
import Footer from './footer';

const rootUrl = location => {
  return location.pathname === "/";
}

const header = location => {
  return(<HeaderContainer pathname={location.pathname}/>);
}

const App = (props) => {
  const { loggedIn, location, children, logout } = props;

  if (loggedIn && rootUrl(location)) { return(<HomePageSignedIn />); }
  else if (rootUrl(location)) { return(<HomePageSignedOut />); }
  else { return(<div>{header(location)}{children}<Footer /></div>); }
};


export default App;
