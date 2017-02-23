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

  toggleModal() {
    this.setState({ modalIsOpen: !(this.state.modalIsOpen )});
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    const userBookshelfIds = this.props.bookshelves.map((bookshelf) => {
        return bookshelf.id;
    });

    let bookshelf;
    const userShelvesBookIsOn = [];
    for (let i = 0; i < this.props.book.bookshelves.length; i++) {
      bookshelf = this.props.book.bookshelves[i];
      if (userBookshelfIds.includes(bookshelf.id)) {
        userShelvesBookIsOn.push(bookshelf);
      }
    }

    let userShelvesBookIsOnFormatted = [this.props.book.status.status].concat(userShelvesBookIsOn.map((shelf, index) => {
      return shelf.title;
    })).join(", ");

    let fieldsForm = "";

    if (this.state.showEditForm) {
      fieldsForm = (
        <div className="activity-section-fields-form">
          <FieldsFormContainer book={this.props.book} toggleEditForm={this.toggleEditForm} className="from-book-show-activity-section" />
        </div>
      );
    }
    else {
      fieldsForm = "";
    }

    let reviewText;
    if (this.props.book.user_review.body) {
      reviewText = (
        <span>
          {this.props.book.user_review.body}&nbsp;
          <button className="review-row" onClick={this.toggleModal}>edit</button>
        </span>
      );
    } else {
      reviewText = (<button className="add-review" onClick={this.toggleModal}>Add a Review</button>);
    }

    let customStyle = {
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

    return(
      <section className="activity">

        <h3 className="book-details-subheader">MY ACTIVITY</h3>
        <table className="activity">
          <tbody>
            <tr>
              <td className="table-title">Shelves</td>
              <td>
                {userShelvesBookIsOnFormatted}
                <button className="activity-section-edit-fields" onClick={this.toggleEditForm}>edit</button>
                {fieldsForm}
              </td>
            </tr>
            <tr>
              <td className="table-title">Review</td>

              <td className="review-row">
                {reviewText}
                <Modal
                  isOpen={this.state.modalIsOpen}
                  contentLabel="Review Form"
                  onRequestClose={() => { this.closeModal(); }}
                  shouldCloseOnOverlayClick={true}
                  style={customStyle}
                >
                  <ReviewContainer book={this.props.book} closeModal={this.closeModal}/>
                </Modal>
              </td>

            </tr>
          </tbody>
        </table>

      </section>
    );
  }

}
