export const updateStatus = ({ book_id, status_id, status }) => {
  return $.ajax({
    type: "PATCH",
    url: `api/statuses/${status_id}`,
    data: {
      status: {
        book_id: book_id,
        status: status
      }
    }
  });
}

export const createStatus = ({ book_id, status }) => {
  return $.ajax({
    type: "POST",
    url: "api/statuses",
    data: {
      status: {
        book_id: book_id,
        status: status
      }
    }
  });
}
