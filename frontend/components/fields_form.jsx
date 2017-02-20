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
      user_id: this.props.currentUser.id,
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
        <div className="bookshelf-checkboxes" key={bookshelf.id}>
          <input key={bookshelf.id} type="checkbox" value={bookshelf.id} onChange={this.handleInputChange} checked={checked}/>{`   ${bookshelf.title}`}
        </div>
      );
    });

    let addShelfSection;
    if (this.state.addShelfForm) {
      addShelfSection = (<AddShelfFormContainer addBookshelfToBook={this.addBookshelfToBook}/>);
    } else {
      addShelfSection = (<button className="fields-form-add-shelf-toggle" onClick={this.toggleAddShelfForm}>Add new shelf</button>);
    }

    return(
      <div className="fields-form">
        <section>
          <span>choose shelves...</span>
          <button className="close" onClick={this.props.toggleEditForm}>close</button>
        </section>
        {bookshelfCheckboxes}
        {addShelfSection}
      </div>
    );
  }

  addBookshelfToBook(bookshelfId, create) {
    return this.props.updateBook({
      book_id: this.props.book.id,
      bookshelf_id: bookshelfId,
      user_id: this.props.currentUser,
      create: create
    });
  }

}
