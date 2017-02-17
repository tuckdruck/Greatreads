import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import AppContainer from './app_container';
import SignInPage from './sign_in_page';
import MyBooksPageContainer from './my_books_page_container';
import EditBookshelvesPage from './edit_bookshelves_page';


const Root = ({ store }) => (

  <Provider store={ store }>

    <Router history={ hashHistory }>

      <Route path="/" component={AppContainer}/>
      <Route path="signin" component={SignInPage} onEnter={_redirectIfLoggedIn(store)}/>
      <Route path="mybooks" component={MyBooksPageContainer} onEnter={_redirectIfLoggedOut(store)}/>
      <Route path="shelves" component={EditBookshelvesPage} onEnter={_redirectIfLoggedOut(store)}/>

    </Router>

  </Provider>

);

const _redirectIfLoggedOut = store => {
  return (nextState, replace) => {
    if (!store.getState().session.currentUser) {
      replace("/");
    }
  };
}


const _redirectIfLoggedIn = store => {
  return (nextState, replace) => {
    if (store.getState().session.currentUser) {
      replace("/");
    }
  };
}


export default Root;
