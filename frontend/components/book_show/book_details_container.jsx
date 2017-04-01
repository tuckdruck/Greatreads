import React from 'react';
import FieldsFormContainer from '../fields_form_container';
import { connect } from 'react-redux';
import { bookshelvesArray } from '../../selectors/bookshelves_selector';
import { Link } from 'react-router';
import ActivitySectionContainer from './activity_section_container';
import { fetchBooks } from '../../actions/book_actions';
import { createStatus } from '../../actions/status_actions';

class BookDetails extends React.Component {

  constructor(props) {
    super(props);
    this.state = { showEditForm: false };
    this.toggleEditForm = this.toggleEditForm.bind(this);
    this.createStatus = this.createStatus.bind(this);
  }

  toggleEditForm() {
    this.setState({ showEditForm: !(this.state.showEditForm)});
  }

  createStatus() {
    return this.props.createStatus({
      book_id: this.props.book.id,
      status: "to read"
    });
  }

  fieldsFormContainer() {
    if (this.state.showEditForm) {
      return(
        <FieldsFormContainer
          book={this.props.book} toggleEditForm={this.toggleEditForm}
          className="from-book-show"/>
      );
    } else {
      return "";
    }
  }

  statusButton() {
    if (this.props.book.status) {
      return (<figure>{this.buttonText()}</figure>);
    } else {
      return(
        <figure>
          <button onClick={this.createStatus}>Want to Read</button>
        </figure>
      );
    }
  }

  buttonText() {
    switch(this.props.book.status.status) {
      case "read":
        return "✓ Read";
      case "currently reading":
        return "✓ Currently Reading";
      case "to read":
        return "✓ Want to Read";
    }
  }

  statusSection() {
    return (
      <div className="book-show-fields-form">
        {this.statusButton()}
        <button className="arrow" onClick={this.toggleEditForm}>▼
        </button>
        {this.fieldsFormContainer()}
      </div>
    );
  }

  activitySection() {
    if (this.props.loggedIn && this.props.book.status) {
      return(
        <ActivitySectionContainer
          book={this.props.book}
          bookshelves={this.props.bookshelves}
        />
      );
    }
    else { return ""; }
  }

  sidebar() {
    return(
      <section className="sidebar">
        <img
          className="book-show"
          src={this.props.book.cover_image_url}
        />
        {this.props.loggedIn ? this.statusSection() : ""}
      </section>
    );
  }

  linkToBuy() {
    return (
      <li><a href={this.props.book.url_to_buy}>Get a Copy</a></li>
    );
  }

  pageLength() {
    return(<li>{this.props.book.page_length} pages</li>);
  }

  title() {
    return(<h1>{this.props.book.title}</h1>);
  }

  author() {
    return(<h4>{this.props.book.author}</h4>);
  }

  description() {
    return(<p
      className="description">{this.props.book.description}</p>
    );
  }

  rating() {
    return(
      <span>Average rating:&nbsp;{this.props.book.average_rating}</span>
    );
  }

  mainSection() {
    return(
      <section className="main-content">
        {this.title()}{this.author()}{this.rating()}
        {this.description()}
        <ul>{this.pageLength()}{this.linkToBuy()}</ul>
      </section>
    );
  }

  render() {
    if (this.props.loading.booksLoading) { return (<div></div>); }
    return(
      <main>
        <main className="main-content">
          {this.sidebar()}{this.mainSection()}
        </main>
        {this.activitySection()}
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: !!state.session.currentUser,
    bookshelves: bookshelvesArray(state.bookshelves),
    loading: state.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBooks: () => { return dispatch(fetchBooks()); },
    createStatus: (info) => { return dispatch(createStatus(info)); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookDetails);
