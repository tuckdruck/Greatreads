import React from 'react';
import Modal from 'react-modal';
import { createReview, updateReview, deleteReview, fetchReviews } from '../actions/review_actions';
import { connect } from 'react-redux';
import FieldsFormContainer from './fields_form_container';
import { receiveErrors } from '../actions/error_actions';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.reviewAlreadyExists = this.reviewAlreadyExists.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.deleteReview = this.deleteReview.bind(this);
    this.toggleEditForm = this.toggleEditForm.bind(this);

    let reviewBody;
    if (this.reviewAlreadyExists()) {
      reviewBody = this.props.book.user_review.body;
    } else {
      reviewBody = "";
    }

    this.state = { reviewBody: reviewBody, showEditForm: false, errors: [] };
  }

  reviewAlreadyExists() {
    return this.props.book.user_review.body;
  }

  deleteReview() {
    this.props.deleteReview(this.props.book.user_review.id)
      .then(() => { return this.props.fetchReviews(this.props.book.id); })
      .then(() => { return this.props.closeModal(); });
  }

  handleSubmit() {
    this.props.clearErrors();
    if (this.reviewAlreadyExists()) {
      this.props.updateReview({
        id: this.props.book.user_review.id,
        body: this.state.reviewBody
      })
        .then(() => { this.props.fetchReviews(this.props.book.id); })
        .then(() => { this.props.closeModal(); })
        .fail(() => { this.setState({ errors: this.props.errors }); });
    }
    else {
      this.props.createReview({
        book_id: this.props.book.id,
        body: this.state.reviewBody
      })
        .then((book) => { this.props.fetchReviews(this.props.book.id); })
        .then(() => { this.props.closeModal(); })
        .fail(() => { this.setState({ errors: this.props.errors }); });
    }
  }

  updateBody(e) {
    this.setState({ reviewBody: e.currentTarget.value });
  }

  toggleEditForm() {
    this.setState({ showEditForm: !(this.state.showEditForm )});
  }

  render() {
    let fieldsForm;
    if (this.state.showEditForm) {
      fieldsForm = (<FieldsFormContainer book={this.props.book} toggleEditForm={this.toggleEditForm}/>);
    } else {
      fieldsForm = "";
    }

    let deleteButton;
    if (this.reviewAlreadyExists()) {
      deleteButton = (<button className="delete-review" onClick={this.deleteReview}>Delete Review</button>);
    } else {
      deleteButton = "";
    }

    let errorLis = this.state.errors.map((error, index) => {
      return (<li key={index}>{error}</li>);
    });

    return(
      <div className="modal">
        <button className="close-modal" onClick={this.props.closeModal}>X</button>
        <div className="main-modal">
          <img className="cover-thumb"
             src={this.props.book.cover_image_url}/>

           <section className="main-modal-content">
            <header>
              <figure>Your review of</figure>
              <h2>{this.props.book.title}</h2>
              <figure>by {this.props.book.author}</figure>
            </header>

            <div className="fields-form-modal">Bookshelves/tags:&nbsp;&nbsp;&nbsp;
            <button className="fields-form-modal" onClick={this.toggleEditForm}>Choose Shelves...</button>
            {fieldsForm}</div>

            <div>What did you think?</div>

            <ul className="errors">
              {errorLis}
            </ul>

              <textarea onChange={this.updateBody} value={this.state.reviewBody} />
              <div className="review-buttons">
              <button onClick={this.handleSubmit} className="save">Save</button>
              {deleteButton}
              </div>
          </section>

        </div>


      </div>

    );
  }

}

const mapStateToProps = state => {
  return {
    errors: state.errors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createReview: (review) => { return dispatch(createReview(review)); },
    updateReview: (review) => { return dispatch(updateReview(review)); },
    deleteReview: (reviewId) => { return dispatch(deleteReview(reviewId)); },
    fetchReviews: (bookId) => { return dispatch(fetchReviews(bookId)); },
    clearErrors: () => { return dispatch(receiveErrors([])); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Review);
