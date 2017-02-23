import React from 'react';
import { Link, hashHistory } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';
import { fetchUserBooks } from '../actions/book_actions';
import { selectBookshelf } from '../actions/bookshelf_actions';
import SignInContainer from './signed_out/sign_in_container';
import SearchContainer from './search_container';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.redirectToMyBooks = this.redirectToMyBooks.bind(this);
  }

  redirectToMyBooks() {
    if (this.props.pathname) {
      this.props.fetchUserBooks(this.props.currentUser.id).then(() => { this.props.selectBookshelf(null); });
    } else {
      this.props.selectBookshelf(null);
      this.props.fetchUserBooks(this.props.currentUser.id);
      // this.props.fetchUserBooks(this.props.currentUser.id).then(() => { this.props.selectBookshelf(null); });
      hashHistory.push("mybooks");
    }
  }

  render() {
    let myBooksLink;
    let toggleSessionLink;
    let welcomeText;

    if (this.props.loggedIn) {
      myBooksLink = (<button className="looks-like-link" onClick={this.redirectToMyBooks}>My Books</button>);
      toggleSessionLink = (<button className="logout" onClick={this.props.logout}>Log Out</button>);
      welcomeText = (<span className="logout">{this.props.currentUser.username}</span>);
    } else {
      myBooksLink = "";
      toggleSessionLink = <SignInContainer />;
      welcomeText = "";
    }

    return(
      <header className="logo signed-in">
        <div className="signed-in-subheader">
          <nav className="header">
            <Link to="/"><h1 className="logo-signed-in">great<strong>reads</strong></h1></Link>
            <Link to="/">Home</Link>
            {myBooksLink}
            <Link to="/">Browse</Link>
          </nav>
          <SearchContainer />
          {welcomeText}
          {toggleSessionLink}
        </div>
      </header>
    );
  }

}

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    loggedIn: !!state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => { return dispatch(logout()).then(() => { hashHistory.push("/"); }); },
    fetchUserBooks: (userId) => { return dispatch(fetchUserBooks(userId)); },
    selectBookshelf: (bookshelf) => { return dispatch(selectBookshelf(bookshelf)); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
