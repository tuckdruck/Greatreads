import React from 'react';
import FieldsFormContainer from './fields_form_container';

export default class MyBooksIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showEditForm: false };
    this.toggleEditForm = this.toggleEditForm.bind(this);
    this.deleteBookFromBookshelves = this.deleteBookFromBookshelves.bind(this);
  }

  componentDidMount() {
    // this.props.fetchBookshelvesForBook(this.props.book.id);
  }

  toggleEditForm() {
    this.setState({ showEditForm: !(this.state.showEditForm)});
  }

  deleteBookFromBookshelves() {
    this.props.book.bookshelves.forEach((bookshelf) => {
      this.props.updateBook({
        book_id: this.props.book.id,
        bookshelf_id: bookshelf.id,
        create: false
      });
    }, this);
  }

  render() {
    const bookshelves = this.props.book.bookshelves;
    const bookshelfTitles = bookshelves.map((bookshelf) => {
      return bookshelf.title;
    }).join(", ");

    let form;

    if (this.state.showEditForm) {
      form = (<FieldsFormContainer book={this.props.book} toggleEditForm={this.toggleEditForm}/>);
    } else {
      form = "";
    }
    return(
      <tr>
        <td className="cover-col"><img className="cover" src={this.props.book.cover_image_url} alt={this.props.book.title}/></td>
        <td className="book-title-col">{this.props.book.title}</td>
        <td className="book-author-col">{this.props.book.author}</td>
        <td className="book-average-rating">{this.props.book.average_rating}</td>
        <td>{bookshelfTitles}<button className="edit-bookshelves" onClick={this.toggleEditForm}>[edit]</button>{form}</td>
        <td>book review goes here</td>
        <td>date read goes here</td>
        <td><button onClick={this.deleteBookFromBookshelves}>X</button></td>
      </tr>
    );
  }

}
