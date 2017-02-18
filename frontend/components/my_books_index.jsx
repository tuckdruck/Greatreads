import React from 'react';
import MyBooksIndexItem from './my_books_index_item';

export default class MyBooksIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    return this.props.fetchUserBooks(this.props.currentUser.id);
  }

  render () {
    const books = this.props.books.map((book) => {
      return(<MyBooksIndexItem book={book} updateBook={this.props.updateBook} key={book.id}/>);
    });
    return(
      <table>
        <tbody>
        <tr>
          <th className="cover-col">cover</th>
          <th className="book-title-col">title</th>
          <th className="book-author-col">author</th>
          <th className="book-average-rating">avg rating</th>
          <th>shelves</th>
          <th>review</th>
          <th>date read</th>
          <th>remove from books</th>
        </tr>
        {books}
        </tbody>
      </table>
    );
  }

}
