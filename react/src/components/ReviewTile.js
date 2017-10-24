import React from 'react';
import { Link } from 'react-router-dom';

const ReviewTile = props => {
  return(
    <div>
      <li>
        Review by [insert name here] <br/>
        Rating: {props.rating} <br/>
        Comments: {props.body}
      </li>
    </div>
  )
}

export default ReviewTile
