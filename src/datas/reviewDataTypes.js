// Import PropTypes
import PropTypes from 'prop-types';

export const ReviewDataTypes = PropTypes.shape({
  comments: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  reviewer: PropTypes.shape({
    firstName: PropTypes.string.isRequired
  }).isRequired,
  localizedDate: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  translatedFrom: PropTypes.string.isRequired
});

export const CommentListPropTypes = PropTypes.shape({
  reviews: PropTypes.arrayOf(ReviewDataTypes).isRequired
});
