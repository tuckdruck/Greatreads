export const reviewsArray = reviews => {
  return Object.keys(reviews).map((id) => {
    return reviews[id];
  });
};
