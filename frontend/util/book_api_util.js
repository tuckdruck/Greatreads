export const fetchBookshelfBooks = bookshelfId => {
  return $.ajax({
    type: "GET",
    url: `api/bookshelves/${bookshelfId}/books`
  });
};

export const fetchUserBooks = userId => {
  return $.ajax({
    type: "GET",
    url: `/api/users/${userId}/books`
  });
};

export const updateBook = ({ book_id, bookshelf_id, create }) => {
  return $.ajax({
    type: "PATCH",
    url: `api/books/${book_id}`,
    data: {
      book: {
        book_id: book_id,
        bookshelf_id: bookshelf_id,
        create: create
      }
    }
  });
};

export const fetchBooks = () => {
  return $.ajax({
    type: "GET",
    url: "api/books"
  });
}

export const fetchStatusBooks = (statusName) => {
  return $.ajax({
    type: "GET",
    url: "api/books",
    data: { status_name: statusName }
  });
}
