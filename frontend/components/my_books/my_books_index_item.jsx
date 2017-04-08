import React from 'react';
import FieldsFormContainer from '../fields_form_container';
import { Link } from 'react-router';
import ReactDOM from 'react-dom';
import DateReadFormContainer from './date_read_form_container';
import Modal from 'react-modal';
import ReviewContainer from '../review_container';
import DeleteBook from './delete_book';
import { updateBook, removeBook } from '../../actions/book_actions';
import { deleteStatus } from '../../actions/status_actions';
import { connect } from 'react-redux';
import { bookshelvesArray } from '../../selectors/bookshelves_selector';


class MyBooksIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showEditForm: false, showDeleteBookWarning: false,
      showDateReadForm: false, modalIsOpen: false
    };
    this.bindFunctions();
  }

  bindFunctions() {
    this.toggleEditForm = this.toggleEditForm.bind(this);
    this.toggleDeleteWarning = this.toggleDeleteWarning.bind(this);
    this.toggleDateReadForm = this.toggleDateReadForm.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  toggleEditForm() {
    this.setState({ showEditForm: !(this.state.showEditForm)});
  }

  toggleDeleteWarning() {
    this.setState({
      showDeleteBookWarning: !this.state.showDeleteBookWarning
    });
  }

  toggleDateReadForm() {
    this.setState({ showDateReadForm: !(this.state.showDateReadForm )});
  }

  deleteBook() {
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

  associationsToUser() {
    let associations = this.props.book.bookshelves.map((shelf) => {
      return shelf.title;
    });

    associations.push(this.props.book.status.status);

    associations = associations.join(", ");
    if (associations.length > associations.slice(0, 50).length) {
      return associations.slice(0, 50) + "...";
    }

    return associations;
  }

  fieldsForm() {
    if (this.state.showEditForm) {
      return(
        <FieldsFormContainer
          book={this.props.book}
          toggleEditForm={this.toggleEditForm}
        />
      );
    } else { return ""; }
  }

  deleteBookWarningText() {
    if (this.state.showDeleteBookWarning) {
      return(
        <DeleteBook book={this.props.book}
          deleteBook={this.deleteBook}
          toggleDeleteWarning={this.toggleDeleteWarning}
        />
      );
    } else { return ""; }
  }

  parsedDate(dateRead) {
    let dateArr = dateRead.split("-");
    const months = [
      "", "Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug",
      "Sept", "Oct", "Nov", "Dec"
    ];

    let month = months[parseInt(dateArr[1])];

    return `${month} ${parseInt(dateArr[2])}, ${dateArr[0]}`;
  }

  dateReadText() {
    const dateRead = this.props.book.status.date_read;
    if (dateRead) {
      return(<span>{this.parsedDate(dateRead)}</span>);
    } else {
      return(<span className="date-not-set">not set</span>);
    }
  }

  dateReadForm() {
    if (this.state.showDateReadForm) {
      return(
        <DateReadFormContainer
          toggleDateReadForm={this.toggleDateReadForm}
          book={this.props.book}
        />
      );
    } else { return ""; }
  }

  reviewModalStyle() {
    return {
      overlay: { backgroundColor: 'rgba(24, 24, 24, 0.75)' },
      content: {
        top: '17%', left: '24%', right: '24%', bottom: '17%',
        paddingLeft: '43px', paddingRight: '43px', paddingTop: '23px',
        paddingBottom: '23px'
      }
    };
  }

  reviewModal() {
    return(
      <Modal
        isOpen={this.state.modalIsOpen} contentLabel="Review Form"
        onRequestClose={this.closeModal}
        shouldCloseOnOverlayClick={true} style={this.reviewModalStyle()}
      >
        <ReviewContainer book={this.props.book}
        closeModal={this.closeModal}/>
      </Modal>
    );
  }

  reviewText() {
    const review = this.props.book.user_review.body;
    if (review) {
      let blurb;
      if (review.length > 50) {
        blurb = review.slice(0, 50) + "...";
      } else { blurb = review; }
      return(<span>{blurb}</span>);
    } else { return(<span className="review-not-set">None</span>); }
  }

  bookCoverCell() {
    return(
      <td className="cover my-books" id="first-td">
        <Link to={`books/${this.props.book.id}`}>
          <img
            className="cover"
            src={this.props.book.cover_image_url}
            alt={this.props.book.title}/>
        </Link>
      </td>
    );
  }

  bookTitleCell() {
    return(
      <td className="title my-books">
        <Link to={`books/${this.props.book.id}`}>
          {this.props.book.title}
        </Link>
      </td>
    );
  }

  bookAuthorCell() {
    return(
      <td className="author my-books">
        {this.props.book.author}
      </td>
    );
  }

  bookRatingCell() {
    return(
      <td className="avg-rating my-books">
        {this.props.book.average_rating}
      </td>
    );
  }

  bookAssociationsCell() {
    return(
      <td className="shelves my-books">
        {this.associationsToUser()}
        <button className="edit-bookshelves"
          onClick={this.toggleEditForm}
        >
          &nbsp;[edit]
        </button>
        {this.fieldsForm()}
      </td>
    );
  }

  bookReviewCell() {
    return(
      <td className="review my-books">
        {this.reviewText()}&nbsp;
        <button onClick={this.toggleModal}>[edit]</button>
        {this.reviewModal()}
      </td>
    );
  }

  dateReadCell() {
    return(
      <td className="date-read my-books">
        {this.dateReadText()}&nbsp;
        <button onClick={this.toggleDateReadForm}>[edit]</button>
        {this.dateReadForm()}
      </td>
    );
  }

  deleteBookCell() {
    return(
      <td className="delete-book my-books">
        <button onClick={this.toggleDeleteWarning}>X</button>
        {this.deleteBookWarningText()}
      </td>
    );
  }

  render() {
    return(
      <tr>
        {this.bookCoverCell()}{this.bookTitleCell()}
        {this.bookAuthorCell()}{this.bookRatingCell()}
        {this.bookAssociationsCell()}{this.bookReviewCell()}
        {this.dateReadCell()}{this.deleteBookCell()}
      </tr>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    bookshelves: bookshelvesArray(state.bookshelves),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateBook: (book) => { return dispatch(updateBook(book)); },
    removeBook: (book) => { return dispatch(removeBook(book)); },
    deleteStatus: (status) => { return dispatch(deleteStatus(status)); }
  };
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(MyBooksIndexItem);
