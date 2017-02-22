export const updateStatus = ({ book_id, status_id, status, date_read }) => {
  debugger
  return $.ajax({
    type: "PATCH",
    url: `api/statuses/${status_id}`,
    data: {
      status: {
        book_id: book_id,
        status: status,
        date_read: date_read
      }
    }
  });
};

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

export const deleteStatus = (status_id) => {
  return $.ajax({
    type: "DELETE",
    url: `api/statuses/${status_id}`
  });
}
