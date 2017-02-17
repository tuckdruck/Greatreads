import React from 'react';
import { Link, hashHistory } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';

const Header = (props) => {
  return(
    <header className="logo signed-in">
      <div className="signed-in-subheader">
        <nav className="header">
          <Link to="/"><h1 className="logo-signed-in">great<strong>reads</strong></h1></Link>
          <Link to="/">Home</Link>
          <Link to="mybooks">My Books</Link>
          <Link to="/">Browse</Link>
        </nav>

        <button className="logout" onClick={props.logout}>Log Out</button>
      </div>
    </header>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => { return dispatch(logout()) }
  };
};

export default connect(null, mapDispatchToProps)(Header);
