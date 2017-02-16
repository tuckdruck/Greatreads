import React from 'react';

export default class MyBooksIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBookshelvesForBook(this.props.book.id);
  }

  render() {
    return(
      <tr>
        <td>{this.props.book.cover}</td>
        <td>{this.props.book.title}</td>
        <td>{this.props.book.author}</td>
        <td>{this.props.book.average_rating}</td>
        <td>book shelves go here</td>
        <td>book review goes here</td>
        <td>date read goes here</td>
      </tr>
    );
  }

};

export default MyBooksIndexItem;
