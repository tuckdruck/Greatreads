import React from 'react';
import { connect } from 'react-redux';

const ActivitySection = props => {
  const userBookshelfIds = props.bookshelves.map((bookshelf) => {
      return bookshelf.id;
  });

  let bookshelf;

  const userShelvesBookIsOn = [];

  for (let i = 0; i < props.book.bookshelves.length; i++) {
    bookshelf = props.book.bookshelves[i];
    if (userBookshelfIds.includes(bookshelf.id)) {
      userShelvesBookIsOn.push(bookshelf);
    }
  }

  let shelvesBookIsOnLis = userShelvesBookIsOn.map((shelf, index) => {
    return (<li key={index}>{shelf.title}</li>);
  });

  return(
    <section>
      <h3>MY ACTIVITY</h3>
      <table>
        <tbody>
          <tr>
            <td>Shelves</td>
            <td>
              <ul>{shelvesBookIsOnLis}</ul>
            </td>
          </tr>
          <tr>
            <td>Review</td>
            <td>Review goes here</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default ActivitySection;
