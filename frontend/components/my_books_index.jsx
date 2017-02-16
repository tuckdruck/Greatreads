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
      return(<MyBooksIndexItem book={book} key={book.id}/>);
    });
    return(
      <table>
        <tbody>
        <tr>
          <th>cover</th>
          <th>title</th>
          <th>author</th>
          <th>avg rating</th>
          <th>shelves</th>
          <th>review</th>
          <th>date read</th>
        </tr>
        {books}
        </tbody>
      </table>
    );
  }

}
