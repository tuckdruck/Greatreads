import React from 'react';
import HomePageSignedIn from './home_page_signed_in';
import HomePageSignedOut from './signed_out/home_page_signed_out';
import HeaderContainer from './header_container';
import Footer from './footer';

const App = (props) => {
  let page;

  if (props.loggedIn && props.location.pathname === "/") {
    page = (<HomePageSignedIn logout={props.logout}/>);
  }
  else if (props.location.pathname === "/") {
    page = (<HomePageSignedOut />);
  }
  else {
    page = (
      <div>
        <HeaderContainer pathname={props.location.pathname}/>
        {props.children}
        <Footer />
      </div>
    );
  }

  return(
    <div>
      {page}
    </div>
  );
};


export default App;
