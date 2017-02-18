const bookshelvesArray = bookshelves => {
  return Object.keys(bookshelves).map((id) => {
    return bookshelves[id];
  });
};

export default bookshelvesArray;
