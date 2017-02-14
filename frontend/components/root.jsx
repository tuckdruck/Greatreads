import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import HomePageSignedOut from './home_page_signed_out';
import MainHeader from './main_header';
import HomePageSignedIn from './home_page_signed_in'

const Root = ({ store }) => (

  <Provider store={ store }>

    <Router history={ hashHistory }>
      <Route path="/">
        <IndexRoute component={HomePageSignedOut}/>
        <Route path="books" component={MainHeader}>
          <Route path="home" component={HomePageSignedIn}/>
        </Route>
      </Route>
    </Router>

  </Provider>

);

export default Root;
