export const bookshelvesArray = bookshelves => {
  return Object.keys(bookshelves).map((id) => {
    return bookshelves[id];
  });
};

export const onlyUserBookshelves = (allBookshelves, bookBookshelves) => {
  debugger
  const userBookshelfIds = allBookshelves.map((bookshelf) => {
      return bookshelf.id;
  });

  let bookshelf;
  let userShelvesBookIsOn = [];

  for (let i = 0; i < bookBookshelves.length; i++) {
    bookshelf = bookBookshelves[i];
    if (userBookshelfIds.includes(bookshelf.id)) {
      userShelvesBookIsOn.push(bookshelf);
    }
  }

  return userShelvesBookIsOn;
};
