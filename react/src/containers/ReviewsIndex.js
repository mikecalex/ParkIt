import React from 'react';
import ReviewTile from '../components/ReviewTile'

const ReviewsIndex = props => {
  let reviews = props.reviews.map(review => {
    return(
      <ReviewTile
        key={review.id}
        id={review.id}
        rating={review.rating}
        body={review.body}
      />
    )
  })

  return(
    <ul>
      {reviews}
    </ul>
  )
}

export default ReviewsIndex
