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

  let userShelvesBookIsOnFormatted = userShelvesBookIsOn.map((shelf, index) => {
    return shelf.title;
  }).join(", ");

  return(
    <section className="activity">
      <h3 className="book-details-subheader">MY ACTIVITY</h3>
      <table className="activity">
        <tbody>
          <tr>
            <td className="table-title">Shelves</td>
            <td>
              {userShelvesBookIsOnFormatted}
            </td>
          </tr>
          <tr>
            <td className="table-title">Review</td>
            <td>Review goes here</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default ActivitySection;
