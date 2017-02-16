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
