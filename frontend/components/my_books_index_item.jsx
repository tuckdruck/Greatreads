import React from 'react';
import FieldsFormContainer from './fields_form_container';

export default class MyBooksIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showEditForm: false };
    this.toggleEditForm = this.toggleEditForm.bind(this);
  }

  componentDidMount() {
    // this.props.fetchBookshelvesForBook(this.props.book.id);
  }

  toggleEditForm() {
    this.setState({ showEditForm: !(this.state.showEditForm)});
  }

  render() {
    const bookshelves = this.props.book.bookshelves;
    const bookshelfTitles = bookshelves.map((bookshelf) => {
      return bookshelf.title;
    });

    let form;

    if (this.state.showEditForm) {
      form = (<FieldsFormContainer book={this.props.book} toggleEditForm={this.toggleEditForm}/>);
    } else {
      form = "";
    }
    return(
      <tr>
        <td className="cover-col">{this.props.book.cover}</td>
        <td className="book-title-col">{this.props.book.title}</td>
        <td className="book-author-col">{this.props.book.author}</td>
        <td>{this.props.book.average_rating}</td>
        <td>{bookshelfTitles}<button onClick={this.toggleEditForm}>[edit]</button>{form}</td>
        <td>book review goes here</td>
        <td>date read goes here</td>
      </tr>
    );
  }

}
