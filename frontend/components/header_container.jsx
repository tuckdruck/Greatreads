import React from 'react';
import { Link, hashHistory } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';
import { fetchUserBooks } from '../actions/book_actions';
import { selectBookshelf } from '../actions/bookshelf_actions';
import SignInContainer from './signed_out/sign_in_container';
import SearchContainer from './search_container';
import About from './about';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.redirectToMyBooks = this.redirectToMyBooks.bind(this);
    this.state = { showAbout: false };
    this.toggleAbout = this.toggleAbout.bind(this);
  }

  toggleAbout() {
    this.setState({ showAbout: !this.state.showAbout });
  }

  redirectToMyBooks() {
    if (this.props.pathname && this.props.pathname == "/mybooks") {
      this.props.fetchUserBooks(this.props.currentUser.id)
        .then(() => { this.props.selectBookshelf(null); });
    } else {
      this.props.selectBookshelf(null);
      this.props.fetchUserBooks(this.props.currentUser.id);
      hashHistory.push("mybooks");
    }
  }

  myBooksLink() {
    if (this.props.loggedIn) {
      return(
        <button className="looks-like-link mybooks"
          onClick={this.redirectToMyBooks}
        >
          My Books
        </button>
      );
    } else { return ""; }
  }

  toggleSessionLink() {
    if (this.props.loggedIn) {
      return(
        <button className="logout looks-like-link"
                onClick={this.props.logout}>
          Log Out
        </button>
      );
    }
    else { return(<SignInContainer />); }
  }

  welcomeText() {
    if (this.props.loggedIn) {
      let username = this.props.currentUser.username;
      if (username.length > 10) {
        username = username.slice(0, 10) + "...";
      }
      return(<span className="logout">{username}</span>);
    }
    else { return ""; }
  }

  aboutLink() {
    if (this.props.loggedIn) {
      return(
        <button className="looks-like-link about"
                onClick={this.toggleAbout}
        >
          About
        </button>
      );
    } else {
      return "";
    }
  }

  aboutText() {
    let aboutText;
    if (this.state.showAbout) {
      return(<About toggleAbout={this.toggleAbout} />);
    } else { return ""; }
  }

  logo() {
    return(
      <Link to="/">
        <h1 className="logo-signed-in">great<strong>reads</strong></h1>
      </Link>
    );
  }

  render() {
    return(
      <header className="logo signed-in">

          <nav className="header">
            {this.logo()}
            <Link to="/">Home</Link>
            {this.myBooksLink()}
            <Link to="/">Browse</Link>
            <SearchContainer pathname={this.props.pathname}/>
            {this.welcomeText()}
            {this.aboutLink()}{this.aboutText()}
            {this.toggleSessionLink()}
          </nav>


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
    logout: () => {
      return dispatch(logout()).then(() => { hashHistory.push("/"); });
    },
    fetchUserBooks: (userId) => { return dispatch(fetchUserBooks(userId)); },
    selectBookshelf: (bookshelf) => { return dispatch(selectBookshelf(bookshelf)); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
