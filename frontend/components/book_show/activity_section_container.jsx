import React from 'react';
import { connect } from 'react-redux';
import FieldsFormContainer from '../fields_form_container';
import Modal from 'react-modal';
import ReviewContainer from '../review_container';

export default class ActivitySection extends React.Component {

  constructor(props) {
    super(props);
    this.state = { showEditForm: false, modalIsOpen: false };
    this.toggleEditForm = this.toggleEditForm.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  toggleEditForm() {
    this.setState({ showEditForm: !(this.state.showEditForm)  });
  }

  userAssociationsWithBook() {
    const userShelvesBookIsOn = [];
    let bookshelf;
    for (let i = 0; i < this.props.book.bookshelves.length; i++) {
      bookshelf = this.props.book.bookshelves[i];
      userShelvesBookIsOn.push(bookshelf.title);
    }

    return [this.props.book.status.status]
      .concat(userShelvesBookIsOn)
      .join(", ");
  }

  shelvesRow() {
    return (<tr>
      <td className="table-title">Shelves</td>
      <td>
        {this.userAssociationsWithBook()}
        {this.editShelvesButton()}
        {this.fieldsForm()}
      </td>
    </tr>
    );
  }

  editShelvesButton() {
    return(
      <button
        className="activity-section-edit-fields"
        onClick={this.toggleEditForm}>
        edit
      </button>
    );
  }

  openFieldsForm() {
    return(
      <div className="activity-section-fields-form">
        <FieldsFormContainer
          book={this.props.book}
          toggleEditForm={this.toggleEditForm}
          className="from-book-show-activity-section" />
      </div>
    );
  }
  reviewModalStyles() {
    return {
      overlay: {
        backgroundColor: 'rgba(24, 24, 24, 0.75)'
      },
      content: {
        top: '17%',
        left: '24%',
        right: '24%',
        bottom: '17%',
        paddingLeft: '43px',
        paddingRight: '43px',
        paddingTop: '23px',
        paddingBottom: '23px'
      }
    };
  }

  toggleModal() {
    this.setState({ modalIsOpen: !(this.state.modalIsOpen )});
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  reviewModal() {
    return(
      <Modal
        isOpen={this.state.modalIsOpen} contentLabel="Review Form"
        onRequestClose={() => { this.closeModal(); }}
        shouldCloseOnOverlayClick={true}
        style={this.reviewModalStyles()}
      >
        <ReviewContainer book={this.props.book} closeModal={this.closeModal}/>
      </Modal>
    );
  }

  fieldsForm() {
    return this.state.showEditForm ? this.openFieldsForm() : "";
  }

  review() {
    this.props.book.user_review.body
  }

  reviewButton() {
    const className = this.review() ? "review-row" : "add-review";
    const buttonText = this.review() ? "edit" : "Add a Review";

    return (
      <button className={className} onClick={this.toggleModal}>
        {buttonText}
      </button>
    );
  }

  reviewText() {
    if (this.review()) {
      return (<span>{this.review()}&nbsp;{this.reviewButton()}</span>);
    }
    else {
      return this.reviewButton();
    }
  }

  reviewRow() {
    return (
      <tr>
        <td className="table-title review-title">Review</td>
        <td className="review-row">
          {this.reviewText()}
          {this.reviewModal()}
        </td>
      </tr>
    );
  }

  render() {
    return(
        <section className="activity">
          <h3 className="book-details-subheader">MY ACTIVITY</h3>
          <table className="activity">
            <tbody>{this.shelvesRow()}{this.reviewRow()}</tbody>
          </table>
        </section>
      );
  }

}
