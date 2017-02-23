import React from 'react';
import FieldsFormContainer from '../fields_form_container';
import { Link } from 'react-router';
import ReactDOM from 'react-dom';
import DateReadFormContainer from './date_read_form_container';
import Modal from 'react-modal';
import ReviewContainer from '../review_container';



export default class MyBooksIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showEditForm: false, showDeleteBookWarning: false, showDateReadForm: false, modalIsOpen: false };
    this.toggleEditForm = this.toggleEditForm.bind(this);
    this.deleteBookFromBookshelves = this.deleteBookFromBookshelves.bind(this);
    this.toggleDeleteBookWarning = this.toggleDeleteBookWarning.bind(this);
    this.toggleDateReadForm = this.toggleDateReadForm.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  toggleEditForm() {
    this.setState({ showEditForm: !(this.state.showEditForm)});
  }

  toggleDeleteBookWarning() {
    this.setState({ showDeleteBookWarning: !this.state.showDeleteBookWarning });
  }

  toggleDateReadForm() {
    this.setState({ showDateReadForm: !(this.state.showDateReadForm )});
  }

  deleteBookFromBookshelves() {
    this.setState({ showDeleteBookWarning: false });
    this.props.deleteStatus(this.props.book.status.id);
  }

  shouldComponentUpdate() {
    return !!this.props.book.status;
  }

  toggleModal() {
    this.setState({ modalIsOpen: !(this.state.modalIsOpen )});
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    let associationsToUser;

    if (this.props.book.status) {
      associationsToUser = [this.props.book.status.status];

      let bookshelves = this.props.book.bookshelves.map((bookshelf) => {
        return bookshelf.title;
      });

      associationsToUser = associationsToUser.concat(bookshelves);
      associationsToUser = associationsToUser.join(", ");
    }
    else {
      associationsToUser = "";
    }

    let form;

    if (this.state.showEditForm) {
      form = (<FieldsFormContainer book={this.props.book} toggleEditForm={this.toggleEditForm} />);
    } else {
      form = "";
    }

    let warning = "";
    if (this.state.showDeleteBookWarning) {
      warning = (
        <div className="delete-book-warning">
          Are you sure you want to remove {this.props.book.title} from your books?
          <div>
            <button onClick={this.deleteBookFromBookshelves}>Delete</button>&nbsp;&nbsp;
            <button onClick={this.toggleDeleteBookWarning}>Cancel</button>
          </div>
        </div>
      );
    }

    let dateReadText;
    if (this.props.book.status.date_read) {
      let dateArr = this.props.book.status.date_read.split("-");
      let months = ["", "Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

      let monthText = months[parseInt(dateArr[1])];

      dateReadText = (<span>{`${monthText} ${parseInt(dateArr[2])}, ${dateArr[0]}`}</span>);
    } else {
      dateReadText = (<span className="date-not-set">not set</span>);
    }

    let dateReadForm;
    if (this.state.showDateReadForm) {
      dateReadForm = (<DateReadFormContainer toggleDateReadForm={this.toggleDateReadForm} book={this.props.book} />);
    } else {
      dateReadForm = "";
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

    let reviewText;
    if (this.props.book.user_review.body) {
      reviewText = (<span >{this.props.book.user_review.body}</span>);
    } else {
      reviewText = (<span className="review-not-set">None</span>);
    }

    return(
      <tr>
        <td className="cover-col my-books" id="first-td">
          <Link to={`books/${this.props.book.id}`}>
            <img
              className="cover"
              src={this.props.book.cover_image_url}
              alt={this.props.book.title}/>
          </Link>
        </td>

        <td className="book-title-col my-books">
          <Link to={`books/${this.props.book.id}`}>
            {this.props.book.title}
          </Link>
        </td>

        <td className="book-author-col my-books">
          {this.props.book.author}
        </td>

        <td className="book-average-rating my-books">
          {this.props.book.average_rating}
        </td>

        <td className="shelves my-books">
          {associationsToUser}
          <button className="edit-bookshelves" onClick={this.toggleEditForm}>
            &nbsp;[edit]
          </button>
          {form}
        </td>

        <td className="review my-books">
          {reviewText}&nbsp;
          <button onClick={this.toggleModal}>[edit]</button>
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

        <td className="date-read my-books">
          {dateReadText}&nbsp;
          <button onClick={this.toggleDateReadForm}>[edit]</button>
          {dateReadForm}
        </td>

        <td className="delete-book my-books">
          <button onClick={this.toggleDeleteBookWarning}>X</button>
          {warning}
        </td>

      </tr>
    );

  }

}
