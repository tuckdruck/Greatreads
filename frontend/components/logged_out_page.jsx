import React from 'react';
import { Link } from 'react-router';

const LoggedOutPage = () => {
  return(
    <div>
      You've been signed out.
      <Link to="/">Goodreads Home</Link>
      or
      <Link to="/signin">Sign in again</Link>
    </div>
  );
};

export default LoggedOutPage;
