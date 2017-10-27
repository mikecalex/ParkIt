import React from 'react';
import ReviewTile from '../components/ReviewTile'

const ReviewsIndex = props => {
  let reviews = props.reviews.map(review => {
    return(
      <ReviewTile
        key={review.id}
        review={review}
        handleClick={props.handleClick}
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
