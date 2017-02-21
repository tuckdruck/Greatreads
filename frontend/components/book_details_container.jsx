import React from 'react';
import FieldsFormContainer from './fields_form_container';
import { connect } from 'react-redux';
import { bookshelvesArray } from '../selectors/bookshelves_selector';
import { Link } from 'react-router';
import ActivitySectionContainer from './activity_section_container';
import { fetchBooks } from '../actions/book_actions';
import { createStatus } from '../actions/status_actions';

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


  render() {

    if (this.props.loading.booksLoading) {
      return (<div></div>);
    }

    else {
      let fieldsForm = "";
      let statusButton;


      if (this.props.book.status) {
        let buttonText;

        switch(this.props.book.status.status) {
          case "read":
            buttonText = "Read";
            break;
          case "currently reading":
            buttonText = "Currently Reading";
            break;
          case "to read":
            buttonText = "Want to Read";
            break;
        }

        statusButton = (<figure>{buttonText}</figure>);
      }
      else {
        statusButton = (<figure><button onClick={this.createStatus}>Want to Read</button></figure>);
      }

      if (this.props.loggedIn && this.state.showEditForm) {
        fieldsForm = (
          <div className="book-show-fields-form">
              {statusButton}
              <button className="arrow" onClick={this.toggleEditForm}>▼</button>
              <FieldsFormContainer book={this.props.book} toggleEditForm={this.toggleEditForm} className="from-book-show"/>
          </div>

        );
      }
      else if (this.props.loggedIn) {
        fieldsForm = (
          <div className="book-show-fields-form">
              <figure>{statusButton}</figure>
              <button className="arrow" onClick={this.toggleEditForm}>▼</button>
          </div>
        );
      }
      else {
        fieldsForm = "";
      }

      let myActivitySection = "";
      if (this.props.loggedIn && this.props.book && this.props.book.status) {
        myActivitySection = (<ActivitySectionContainer book={this.props.book} bookshelves={this.props.bookshelves} />);
      }

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
