export const createBookTagging = (bookTagging) => {
  return $.ajax({
    type: "POST",
    url: "api/booktaggings",
    data: {
      book_tagging: bookTagging
    }
  });
};

// export const deleteBookTagging = (bookTagging) => {
//   return $.ajax({
//     type: "DELETE",
//     url: "api/"
//   });
// }
