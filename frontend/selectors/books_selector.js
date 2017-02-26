const booksArray = books => {
  if (Object.keys(books).length === 0) {
    return [];
  }

  return Object.keys(books).map((id) => {
    return books[id];
  });
};



export default booksArray;
