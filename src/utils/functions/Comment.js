export function calculateAverageRating (reviews) {
  console.log('reviews');
  console.log(reviews);

  if (reviews.length === 0) {
    return 0; // Return 0 if there are no reviews to calculate the average from
  }

  const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
  const averageRating = totalRating / reviews.length;

  // Round the average rating to, for example, 1 decimal place
  return Math.round(averageRating * 10) / 10;
};

export function removeHtmlTags (input) {
  return input.replace(/<[^>]*>/g, '');
};
