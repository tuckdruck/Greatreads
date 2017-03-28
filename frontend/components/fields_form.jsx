import React from 'react';
import AddShelfFormContainer from './add_shelf_form_container';
import ReactDOM from 'react-dom';

export default class FieldsForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = { addShelfForm: false };
    this.toggleAddShelfForm = this.toggleAddShelfForm.bind(this);
    this.addBookshelfToBook = this.addBookshelfToBook.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    document.addEventListener('click', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick, false);
  }

  handleClick(e) {
    if(!ReactDOM.findDOMNode(this).contains(e.target) && e.target.className !== "fields-form-add-shelf-toggle") {
      this.props.toggleEditForm();
    }
  }

  handleInputChange(event) {
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

  handleStatusChange(statusName) {
    return (() => {
      if (this.props.book.status) {
        return this.props.updateStatus({
          status_id: this.props.book.status.id,
          book_id: this.props.book.id,
          status: statusName,
          date_read: this.props.book.status.date_read
        });
      }
      else {
        return this.props.createStatus({
          book_id: this.props.book.id,
          status: statusName
        });
      }
    }).bind(this);
  }

  toggleAddShelfForm() {
    this.setState({ addShelfForm: !(this.state.addShelfForm )});
    this.props.clearErrors();
  }

  render() {

    const statusRadioButtons = ["read", "currently reading", "to read"].map((statusName) => {
      return (
        <div className="bookshelf-items radio-buttons" key={statusName}>
          <input
            type="radio"
            value={statusName}
            name="status"
            onChange={this.handleStatusChange(statusName)}
            checked={!!this.props.book.status && this.props.book.status.status === statusName}/>
          &nbsp;&nbsp;{statusName}
        </div>
      );
    }, this);

    const bookshelfTitlesForBook = this.props.book.bookshelves.map((bookshelf) => {
      return bookshelf.title;
    });

    let checked;

    const bookshelfCheckboxes = this.props.bookshelves.map((bookshelf) => {
      checked = (bookshelfTitlesForBook.includes(bookshelf.title));
      return (
        <div className="bookshelf-items" key={bookshelf.id}>
          <input key={bookshelf.id} type="checkbox" value={bookshelf.id} onChange={this.handleInputChange} checked={checked}/>&nbsp;&nbsp;{bookshelf.title}
        </div>
      );
    });

    let addShelfSection;
    if (this.state.addShelfForm) {
      addShelfSection = (<AddShelfFormContainer fromFieldsForm={true} addBookshelfToBook={this.addBookshelfToBook}/>);
    } else {
      addShelfSection = (<button className="fields-form-add-shelf-toggle" onClick={this.toggleAddShelfForm}>Add new shelf</button>);
    }
    let additionalClass = "";
    if (this.props.className) {
      additionalClass = this.props.className;
    }

    return(
      <div className={`fields-form ${additionalClass}`}>
        <section>
          <span>choose shelves...</span>
          <button className="close" onClick={this.props.toggleEditForm}>close</button>
        </section>
        <ul>{statusRadioButtons}</ul>
        {bookshelfCheckboxes}
        {addShelfSection}
      </div>
    );
  }



}
