export const fetchBookshelves = userId => {
  return $.ajax({
    type: "GET",
    url: `api/users/${userId}/bookshelves`
  });
};

export const createBookshelf = (bookshelf, userId) => {
  return $.ajax({
    type: "POST",
    url: `api/users/${userId}/bookshelves`,
    data: {
      bookshelf: bookshelf
    }
  });
};
