export const createReview = review => {
  return $.ajax({
    type: "DELETE",
    url: "api/reviews",
    data: {
      review: review
    }
  });
};


export const updateReview = review => {
  return $.ajax({
    type: "PATCH",
    url: `api/reviews/${review.id}`,
    data: {
      review: review
    }
  });
};


export const deleteReview = reviewId => {
  return $.ajax({
    type: "DELETE",
    url: `api/review/${reviewId}`
  });
};

export const fetchBookReviews = (bookId) => {
  return $.ajax({
    type: "GET",
    url: `api/books/${bookId}/reviews`
  });
};
