export const CHANGE_LOADED_STATUS = "CHANGE_LOADED_STATUS";
export const START_LOADING_USER_BOOKS = "START_LOADING_USER_BOOKS";
export const START_LOADING_BOOKSHELF_BOOKS = "START_LOADING_BOOKSHELF_BOOKS";
export const START_LOADING_ALL_BOOKS = "START_LOADING_ALL_BOOKS";
export const START_LOADING_USER_BOOKSHELVES = "START_LOADING_USER_BOOKSHELVES";
export const START_LOADING_BOOK = "START_LOADING_BOOK";

export const changeLoadedStatus = bool => {
  return {
    type: CHANGE_LOADED_STATUS,
    status: bool
  };
};

export const startLoadingUserBooks = () => {
  return {
    type: START_LOADING_USER_BOOKS
  };
};

export const startLoadingBookshelfBooks = () => {
  return {
    type: START_LOADING_BOOKSHELF_BOOKS
  };
};

export const startLoadingAllBooks = () => {
  return {
    type: START_LOADING_ALL_BOOKS
  };
};

export const startLoadingUserBookshelves = () => {
  return {
    type: START_LOADING_USER_BOOKSHELVES
  };
};

export const startLoadingBook = () => {
  return {
    type: START_LOADING_BOOK
  };
};
