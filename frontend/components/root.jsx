import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import AppContainer from './app_container';
import SignInPage from './signed_out/sign_in_page';
import MyBooksPageContainer from './my_books/my_books_page_container';
import EditBookshelvesPage from './edit_bookshelves/edit_bookshelves_page';
import BookShowPageContainer from './book_show/book_show_page_container';
import SearchResultsPage from './search_results_page';


const Root = ({ store }) => (

  <Provider store={ store }>

    <Router onUpdate={() => window.scrollTo(0, 0)} history={ hashHistory }>

      <Route path="/" component={AppContainer}>
        <Route path="signin" component={SignInPage} onEnter={_redirectIfLoggedIn(store)}/>
        <Route path="mybooks" component={MyBooksPageContainer} onEnter={_redirectIfLoggedOut(store)}/>
        <Route path="shelves" component={EditBookshelvesPage} onEnter={_redirectIfLoggedOut(store)}/>
        <Route path="books/:bookId" component={BookShowPageContainer}/>
        <Route path="search" component={SearchResultsPage} />
      </Route>

    </Router>

  </Provider>

);

const _redirectIfLoggedOut = store => {
  return (nextState, replace) => {
    if (!store.getState().session.currentUser) {
      return replace("/");
    }
  };
};


const _redirectIfLoggedIn = store => {
  return (nextState, replace) => {
    if (store.getState().session.currentUser) {
      replace("/");
    }
  };
};


export default Root;
