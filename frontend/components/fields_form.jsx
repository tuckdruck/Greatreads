import React from 'react';
import AddShelfFormContainer from './add_shelf_form_container';
import ReactDOM from 'react-dom';

export default class FieldsForm extends React.Component {

  constructor(props) {
    super(props);
    this.toggleShelfTagging = this.toggleShelfTagging.bind(this);
    this.state = { addShelfForm: false };
    this.toggleAddShelfForm = this.toggleAddShelfForm.bind(this);
    this.addBookshelfToBook = this.addBookshelfToBook.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    document.addEventListener('click', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick, false);
  }

  handleClick(e) {
    const fieldsFormElement = ReactDOM.findDOMNode(this);
    const outsideFieldsForm = !fieldsFormElement.contains(e.target);
    const addShelfFormClass = "fields-form-add-shelf-toggle";
    const notAddShelfForm = e.target.className !== addShelfFormClass;

    if (outsideFieldsForm && notAddShelfForm) {
      this.props.toggleEditForm();
    }
  }

  toggleShelfTagging(event) {
    const value = event.currentTarget.checked;
    this.props.updateBook({
      user_id: this.props.currentUser.id,
      book_id: this.props.book.id,
      bookshelf_id: event.currentTarget.value,
      create: value
    });
  }

  addBookshelfToBook(bookshelfId, create) {
    return this.props.updateBook({
      book_id: this.props.book.id,
      bookshelf_id: bookshelfId,
      user_id: this.props.currentUser,
      create: create
    });
  }

  updatedStatus(statusName) {
    const { book } = this.props;
    return {
      status_id: book.status.id, book_id: book.id,
      status: statusName, date_read: book.status.date_read
    };
  }

  changeStatus(statusName) {
    const { book, createStatus, updateStatus } = this.props;

    return (() => {
      if (book.status) { updateStatus(this.updatedStatus(statusName)); }
      else {
        createStatus({ book_id: book.id, status: statusName });
      }
    }).bind(this);
  }

  toggleAddShelfForm() {
    this.setState({ addShelfForm: !(this.state.addShelfForm )});
    this.props.clearErrors();
  }

  correctStatus(status) {
    return !!this.props.book.status &&
      this.props.book.status.status === status;
  }

  statusRadioButton(status) {
    return(
      <input
        type="radio"
        value={status}
        name="status"
        onChange={this.changeStatus(status)}
        checked={this.correctStatus(status)}
      />
    );
  }

  statuses() {
    const statusNames = ["read", "currently reading", "to read"];

    return statusNames.map((status) => {
      return(
        <div className="shelf-items radio-buttons" key={status}>
          {this.statusRadioButton(status)}
          &nbsp;&nbsp;{status}
        </div>
      );
    });
  }

  bookshelfCheckBox(shelf, checked) {
    return(
      <input
        key={shelf.id}
        type="checkbox"
        value={shelf.id}
        onChange={this.toggleShelfTagging}
        checked={this.bookOnShelf(shelf)}/>
    );
  }

  bookOnShelf(shelf) {
    const { book } = this.props;
    const shelfTitles = book.bookshelves.map((shelf) => (shelf.title));
    return shelfTitles.includes(shelf.title);
  }

  bookshelves() {
    const { book, bookshelves } = this.props;

    return bookshelves.map((shelf) => {
      return(
        <div className="shelf-items" key={shelf.id}>
          {this.bookshelfCheckBox(shelf)}&nbsp;&nbsp;{shelf.title}
        </div>
      );
    });
  }

  openAddShelfForm() {
    return(
      <AddShelfFormContainer
        className="from-fields-form"
        addBookshelfToBook={this.addBookshelfToBook}
      />
    );
  }

  openAddShelfFormButton() {
    return(
      <button
        className="fields-form-add-shelf-toggle"
        onClick={this.toggleAddShelfForm}
      >
        Add new shelf
      </button>
    );
  }

  addShelfSection() {
    if (this.state.addShelfForm) {
      return(this.openAddShelfForm());
    }
    else { return(this.openAddShelfFormButton()); }
  }

  closeFieldsFormButton() {
    return(
      <button className="close" onClick={this.props.toggleEditForm}>
        close
      </button>
    );
  }

  render() {
    const { className } = this.props;

    return(
      <div className={`fields-form ${className ? className : ""}`}>
        <section>
          <span>choose shelves...</span>{this.closeFieldsFormButton}
        </section>
        {this.statuses()}{this.bookshelves()}{this.addShelfSection()}
      </div>
    );
  }

}
