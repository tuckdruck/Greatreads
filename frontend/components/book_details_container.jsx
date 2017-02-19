import React from 'react';
import FieldsFormContainer from './fields_form_container';
import { connect } from 'react-redux';
import bookshelvesArray from '../selectors/bookshelves_selector';
import { Link } from 'react-router';
import ActivitySectionContainer from './activity_section_container';
import { fetchBooks } from '../actions/book_actions';

class BookDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showEditForm: false };
    this.toggleEditForm = this.toggleEditForm.bind(this);
  }


  toggleEditForm() {
    this.setState({ showEditForm: !(this.state.showEditForm)});
  }




  render() {
    let myActivitySection = "";
    let fieldsForm = "";

    if (this.props.loggedIn && this.state.showEditForm) {
      fieldsForm = (
        <div>
          <button onClick={this.toggleEditForm}>Status</button>
          <FieldsFormContainer book={this.props.book} toggleEditForm={this.toggleEditForm}/>
        </div>
      );
    }
    else if (this.props.loggedIn) {
      fieldsForm = (
        <div>
            <button onClick={this.toggleEditForm}>Status</button>
        </div>
      );
    }
    else {
      fieldsForm = "";
    }

    if (this.props.loggedIn) {
      myActivitySection = (<ActivitySectionContainer book={this.props.book} bookshelves={this.props.bookshelves} />);
    }

    if (this.props.book) {
      return(
        <main>

          <section className="sidebar">
            <img className="book-show" src={this.props.book.cover_image_url}/>

            {fieldsForm}
          </section>

          <section className="main-content">
            <h1>{this.props.book.title}</h1>
            <h3>{this.props.book.author}</h3>
            {this.props.book.average_rating}

            <p>{this.props.book.description}</p>

            <ul>
              <li>{this.props.book.page_length}</li>
              <li>ISBN:&nbsp;{this.props.book.isbn}</li>
              <li><Link to={this.props.book.url_to_buy}>Get a Copy</Link></li>
            </ul>
          </section>

          {myActivitySection}

        </main>
        );
      }
      else {
        return (<div>Loading...</div>);
      }
    }
}

const mapStateToProps = state => {
  return {
    loggedIn: !!state.session.currentUser,
    bookshelves: bookshelvesArray(state.bookshelves)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBooks: () => { return dispatch(fetchBooks()); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookDetails);
