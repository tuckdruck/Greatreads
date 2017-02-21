import React from 'react';
import FieldsFormContainer from './fields_form_container';
import { connect } from 'react-redux';
import { bookshelvesArray } from '../selectors/bookshelves_selector';
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
    let fieldsForm = "";

    if (this.props.loggedIn && this.state.showEditForm) {
      fieldsForm = (
        <div className="book-show-fields-form">
          <figure>Status</figure>
          <button className="arrow" onClick={this.toggleEditForm}>▼</button>
          <FieldsFormContainer book={this.props.book} toggleEditForm={this.toggleEditForm} className="from-book-show"/>
        </div>
      );
    }
    else if (this.props.loggedIn) {
      fieldsForm = (
        <div className="book-show-fields-form">
            <figure>Status</figure>
            <button className="arrow" onClick={this.toggleEditForm}>▼</button>
        </div>
      );
    }
    else {
      fieldsForm = "";
    }

    let myActivitySection = "";
    if (this.props.loggedIn && this.props.book && this.props.book.bookshelves.length > 0) {
      myActivitySection = (<ActivitySectionContainer book={this.props.book} bookshelves={this.props.bookshelves} />);
    }

    if (this.props.book) {
      return(
        <main>

          <main className="main-content">
            <section className="sidebar">
              <img className="book-show" src={this.props.book.cover_image_url}/>

              {fieldsForm}
            </section>

            <section className="main-content">
              <h1>{this.props.book.title}</h1>
              <h4>{this.props.book.author}</h4>
              Average rating:&nbsp;{this.props.book.average_rating}

              <p>{this.props.book.description}</p>

              <ul>
                <li>{this.props.book.page_length} pages</li>
                <li><a href={this.props.book.url_to_buy}>Get a Copy</a></li>
              </ul>
            </section>
          </main>
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
