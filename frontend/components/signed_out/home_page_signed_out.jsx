import React from 'react';
import SignInContainer from './sign_in_container';
import SignUpContainer from './sign_up_container';
import { Link } from 'react-router';
import BooksIndexContainer from '../books_index_container';
import Footer from '../footer';
import { receiveBookshelves } from '../../actions/bookshelf_actions';
import { connect } from 'react-redux';

class HomePageSignedOut extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.receiveBookshelves({});
  }

  render() {
    return(
      <div className="overall-header">
        <header className="container">
          <header className="home-page-signed-out">
            <Link className="logo-link" to="/"><h1 className="logo signed-out">great<strong>reads</strong></h1></Link>
            <SignInContainer />
          </header>
        </header>
        <SignUpContainer />
        <BooksIndexContainer />
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    receiveBookshelves: (bookshelves) => { return dispatch(receiveBookshelves(bookshelves)); }
  };
};

export default connect(null, mapDispatchToProps)(HomePageSignedOut);
