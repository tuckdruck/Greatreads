import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import AppContainer from './app_container';
import LoggedOutPage from './logged_out_page';
import SignInPage from './sign_in_page';


const Root = ({ store }) => (

  <Provider store={ store }>

    <Router history={ hashHistory }>
      <Route path="/" component={AppContainer}/>
      <Route path="logout" component={LoggedOutPage}/>
      <Route path="signin" component={SignInPage}/>
    </Router>

  </Provider>

);

export default Root;
