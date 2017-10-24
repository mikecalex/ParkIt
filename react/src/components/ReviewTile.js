import React from 'react';
import { Link } from 'react-router-dom';
import VoteContainer from '../containers/VoteContainer'

const ReviewTile = props => {
  return(
    <div>
      <li>
        Review by [insert name here] <br/>
        Rating: {props.rating} <br/>
        Comments: {props.body}
        <VoteContainer
          votes={props.votes}
        />
      </li>
    </div>
  )
}

export default ReviewTile
