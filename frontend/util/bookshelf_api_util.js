export const fetchBookshelves = userId => {
  return $.ajax({
    type: "GET",
    url: `api/users/${userId}/bookshelves`
  });
};
