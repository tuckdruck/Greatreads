export const fetchBookshelves = userId => {
  debugger
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

export const updateBookshelf = (bookshelf, userId) => {
  return $.ajax({
    type: "PATCH",
    url: `api/users/${userId}/bookshelves/${bookshelf.id}`,
    data: {
      bookshelf: bookshelf
    }
  });
};

export const deleteBookshelf = (bookshelfId, userId) => {
  return $.ajax({
    type: "DELETE",
    url: `api/users/${userId}/bookshelves/${bookshelfId}`
  });
};
