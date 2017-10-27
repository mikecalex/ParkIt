import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ReviewTile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: null
    }
  this.handleUpClick = this.handleUpClick.bind(this)
  this.handleDownClick = this.handleDownClick.bind(this)
  }

  handleUpClick(event) {
    event.preventDefault()
    let votePayload = {
      user_id: 3,
      review_id: this.props.review.id,
      vote_value: 1
    }
    this.props.handleClick(votePayload)
  }

  handleDownClick(event) {
    event.preventDefault()
    let votePayload = {
      user_id: 3,
      review_id: this.props.review.id,
      vote_value: -1
    }
    this.props.handleClick(votePayload)
  }

  render() {
    return(
      <div>
        <li>
          Review by {this.props.review.user.first_name} <br/>
          Rating: {this.props.review.rating} <br/>
          Comments: {this.props.review.body} <br/>
          {this.props.review.up_votes} <i onClick={this.handleUpClick} className='fa fa-thumbs-up' aria-hidden='true'></i> | {this.props.review.down_votes} <i onClick={this.handleDownClick} className='fa fa-thumbs-down' aria-hidden='true'></i>
        </li>
      </div>
    )
  }
}

export default ReviewTile
