import React from 'react';
import AddShelfFormContainer from './add_shelf_form_container';

export default class FieldsForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = { addShelfForm: false };
    this.toggleAddShelfForm = this.toggleAddShelfForm.bind(this);
    this.addBookshelfToBook = this.addBookshelfToBook.bind(this);
  }

  handleInputChange(event) {
    const value = event.currentTarget.checked;


    this.props.updateBook({
      book_id: this.props.book.id,
      bookshelf_id: event.currentTarget.value,
      create: value
    });
  }

  toggleAddShelfForm() {
    this.setState({ addShelfForm: !(this.state.addShelfForm )});
  }

  render() {
    const bookshelfTitlesForBook = this.props.book.bookshelves.map((bookshelf) => {
      return bookshelf.title;
    });


    let checked;

    const bookshelfCheckboxes = this.props.bookshelves.map((bookshelf) => {
      checked = (bookshelfTitlesForBook.includes(bookshelf.title));

      return (
        <div key={bookshelf.id} onClick={this.handleInputChange}>
          <input key={bookshelf.id} type="checkbox" value={bookshelf.id} onChange={this.handleInputChange} checked={checked}/>{bookshelf.title}
        </div>
      );
    });

    let addShelfSection;
    if (this.state.addShelfForm) {
      addShelfSection = (<AddShelfFormContainer addBookshelfToBook={this.addBookshelfToBook}/>);
    } else {
      addShelfSection = (<button onClick={this.toggleAddShelfForm}>Add new shelf</button>);
    }

    return(
      <div>
        choose shelves...
        <button onClick={this.props.toggleEditForm}>close</button>
        {bookshelfCheckboxes}
        {addShelfSection}
      </div>
    );
  }

  addBookshelfToBook(bookshelfId, create) {
    this.props.updateBook({
      book_id: this.props.book.id,
      bookshelf_id: bookshelfId,
      user_id: this.props.currentUser,
      create: create
    });
  }

}
