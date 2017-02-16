import React from 'react';

const MyBooksIndexItem = ({ book }) => {
  return(
    <tr>
      <td>{book.cover}</td>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.average_rating}</td>
      <td>book shelves go here</td>
      <td>book review goes here</td>
      <td>date read goes here</td>
    </tr>
  );
};

export default MyBooksIndexItem;
