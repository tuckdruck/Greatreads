import React from 'react';
import Modal from 'react-modal';
import { createReview, updateReview, deleteReview } from '../actions/review_actions';
import { connect } from 'react-redux';
import FieldsFormContainer from './fields_form_container';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.reviewAlreadyExists = this.reviewAlreadyExists.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.deleteReview = this.deleteReview.bind(this);

    let reviewBody;
    if (this.reviewAlreadyExists()) {
      reviewBody = this.props.book.user_review.body;
    } else {
      reviewBody = "";
    }

    this.state = { reviewBody: reviewBody };
  }

  reviewAlreadyExists() {
    return this.props.book.user_review.body;
  }

  deleteReview() {
    this.props.deleteReview(this.props.book.user_review.id).then(() => { return  this.props.closeModal(); });
  }

  handleSubmit() {
    if (this.reviewAlreadyExists()) {
      this.props.updateReview({
        id: this.props.book.user_review.id,
        body: this.state.reviewBody
      }).then(() => { this.props.closeModal(); });
    }
    else {
      this.props.createReview({
        book_id: this.props.book.id,
        body: this.state.reviewBody
      }).then(() => { this.props.closeModal(); });
    }
  }

  updateBody(e) {
    this.setState({ reviewBody: e.currentTarget.value });
  }

  render() {
    return(
      <div>
        <img src={this.props.book.cover_image_url}/>
        <h2>Your review of {this.props.book.title} by {this.props.book.author}</h2>
        Bookshelves/tags: fields form will go here
        What did you think?

        <form onSubmit={this.handleSubmit}>
          <input type="textarea" value={this.state.reviewBody} onChange={this.updateBody}/>
          <button>Save</button>
        </form>
        <button onClick={this.deleteReview}>Delete Review</button>

      </div>

    );
  }

}

const mapDispatchToProps = dispatch => {
  return {
    createReview: (review) => { return dispatch(createReview(review)); },
    updateReview: (review) => { return dispatch(updateReview(review)); },
    deleteReview: (reviewId) => { return dispatch(deleteReview(reviewId)); }
  };
};

export default connect(null, mapDispatchToProps)(Review);

//may need to add toggleEditForm to fields form container's props
