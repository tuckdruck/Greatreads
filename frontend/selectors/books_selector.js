const booksArray = books => {
  if (Object.keys(books).length === 0) {
    return [];
  }

  return Object.keys(books).map((id) => {
    return books[id];
  });
};

// const bookArray = book => {
//   Object.keys(book).map((prop) => {
//     return [prop, book[prop]];
//   });
// };

export default booksArray;
