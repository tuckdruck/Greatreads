export const createBookTagging = (bookTagging) => {
  return $.ajax({
    type: "POST",
    url: "api/booktaggings",
    data: {
      book_tagging: bookTagging
    }
  });
};
