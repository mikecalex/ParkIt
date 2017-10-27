import React, { Component } from 'react'
import ReviewsIndex from './ReviewsIndex';
import ReviewFormContainer from './ReviewFormContainer'

class ParkShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      park: {},
      reviews: [],
      user: {}
    }
    this.addNewReview = this.addNewReview.bind(this)
  }

  componentDidMount() {
    let parkId = this.props.match.params.id
    console.log(this.props)
    fetch(`/api/v1/parks/${parkId}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin'})
      .then(response => response.json())
      .then(json => {
        // console.log(json)
        this.setState({ park: json.park, reviews: json.reviews, user: json.user })
      });
  }

  addNewReview(formPayload) {
    let parkId = this.props.match.params.id
    fetch("/api/v1/reviews", {
      method: 'POST',
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formPayload)
    })
      .then((response) => response.json())
      .then(json => {
        console.log(json)
        let newReviewsArray = this.state.reviews.concat(json.review)
        this.setState({ reviews: newReviewsArray })
      })
  }


  render() {
    let handleSubmit = (formPayload) => {
      this.addNewReview(formPayload)
    }
     return(
      <div>
        <div>
          {this.state.park.name}
          {this.state.park.address}
        </div>
        <div>
          <ReviewsIndex
            reviews={this.state.reviews}
          />
        </div>
        <div>
          <ReviewFormContainer
            user={this.state.user}
            park={this.state.park}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    )
  }
}

export default ParkShowContainer
