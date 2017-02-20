import React from 'react';
import FieldsFormContainer from './fields_form_container';
import { Link } from 'react-router';

export default class MyBooksIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showEditForm: false, showDeleteBookWarning: false };
    this.toggleEditForm = this.toggleEditForm.bind(this);
    this.deleteBookFromBookshelves = this.deleteBookFromBookshelves.bind(this);
    this.toggleDeleteBookWarning = this.toggleDeleteBookWarning.bind(this);
  }

  toggleEditForm() {
    this.setState({ showEditForm: !(this.state.showEditForm)});
  }

  toggleDeleteBookWarning() {
    this.setState({ showDeleteBookWarning: !this.state.showDeleteBookWarning });
  }

  deleteBookFromBookshelves() {
    for (let i = 0; i < this.props.book.bookshelves.length; i++) {
      this.props.updateBook({
        book_id: this.props.book.id,
        bookshelf_id: this.props.book.bookshelves[i].id,
        user_id: this.props.currentUser.id,
        create: false
      });
    }
  }

  render() {
    let bookshelfTitles;
    if (this.props.book.bookshelves) {
      bookshelfTitles = this.props.book.bookshelves.map((bookshelf) => {
        return bookshelf.title;
      }).join(", ");
    } else {
      bookshelfTitles = "";
    }


    let form;

    if (this.state.showEditForm) {
      form = (<FieldsFormContainer book={this.props.book} toggleEditForm={this.toggleEditForm}/>);
    } else {
      form = "";
    }

    let warning = "";
    if (this.state.showDeleteBookWarning) {
      warning = (
        <div className="delete-book-warning">
          Are you sure you want to remove {this.props.book.title} from your bookshelves?
          <div>
            <button onClick={this.deleteBookFromBookshelves}>Delete</button>&nbsp;&nbsp;
            <button onClick={this.toggleDeleteBookWarning}>Cancel</button>
          </div>
        </div>
      );
    }
    return(
      <tr>
        <td className="cover-col my-books"><Link to={`books/${this.props.book.id}`}><img className="cover" src={this.props.book.cover_image_url} alt={this.props.book.title}/></Link></td>

        <td className="book-title-col my-books"><Link to={`books/${this.props.book.id}`}>{this.props.book.title}</Link></td>
        <td className="book-author-col my-books">{this.props.book.author}</td>
        <td className="book-average-rating my-books">{this.props.book.average_rating}</td>
        <td className="shelves my-books">{bookshelfTitles}
          <button className="edit-bookshelves" onClick={this.toggleEditForm}>&nbsp;[edit]</button>
          {form}
        </td>
        <td className="review my-books">book review goes here</td>
        <td className="date-read my-books">date read goes here</td>
        <td className="delete-book my-books">
          <button onClick={this.toggleDeleteBookWarning}>X</button>
          {warning}
        </td>
      </tr>
    );
  }

}
