import React from 'react';


const bookDeletionConfirmationText = (book) => {
  return(
    <span>
      Are you sure you want to remove {book.title} from
      your books?
    </span>
  );
};

const cancelBookDeletionButton = (toggleDeleteWarning) => {
  return(
    <button onClick={toggleDeleteWarning}>Cancel</button>
  );
};

const deleteBookButton = (deleteBook) => {
  return(
    <button onClick={deleteBook}>Delete</button>
  );
};

const deleteBook = (props) => {
  return(
    <div className="delete-book-warning">
      {bookDeletionConfirmationText(props.book)}
      <div>
        {deleteBookButton(props.deleteBook)}&nbsp;&nbsp;
        {cancelBookDeletionButton(props.toggleDeleteWarning)}
      </div>
    </div>
  );
};

export default deleteBook;
