import React, { Component } from 'react'
import ReviewsIndex from './ReviewsIndex';
import ReviewFormContainer from './ReviewFormContainer'

class ParkShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      park: {
        reviews: []
      },
      votes: [],
      user: {}
    }
    this.addNewReview = this.addNewReview.bind(this)
    this.addNewVote = this.addNewVote.bind(this)
    this.getVotes = this.getVotes.bind(this)
    this.getPark = this.getPark.bind(this)
    this.getUser = this.getUser.bind(this)
  }

  componentDidMount() {
    this.getVotes();
    this.getPark();
    this.getUser();
  }

  getPark() {
    let parkId = this.props.match.params.id
    fetch(`/api/v1/parks/${parkId}`, {
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin'
    })
      .then(response => response.json())
      .then(json => {
        this.setState({ park: json.park })
      });
  }

  getUser() {
    fetch('/api/v1/users', {
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin'
    })
      .then(response => response.json())
      .then(json => {
        this.setState({ user: json.user });
      });
  }

  getVotes() {
    fetch('/api/v1/votes', {
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin'
    })
    .then(response => response.json())
    .then(json => {
      this.setState({ votes: json })
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
        let newReviewsArray = this.state.reviews.concat(json.review)
        this.setState({ reviews: newReviewsArray })
      })
  }

  addNewVote(votePayload) {
    fetch('/api/v1/votes', {
      method: 'POST',
      body: JSON.stringify(votePayload),
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin'
    })
      .then(response => response.json())
      .then(json => {
        console.log(json)
        let newVotes = this.state.votes.concat(json)
        this.setState({ votes: newVotes })
      })
    this.getVotes()
  }

  render() {
    let handleSubmit = (formPayload) => {
      this.addNewReview(formPayload)
    }

    let handleClick = (votePayload) => {
      this.addNewVote(votePayload)
    }

     return(
      <div>
        <div>
          <h1>{this.state.park.name}</h1>
          <h5>Type of park: {this.state.park.category}</h5>
          <h5>Size of park: {this.state.park.size}</h5>
          <p>Description: {this.state.park.description}</p>
        </div>
        <div>
          <p>{this.state.park.address}</p>
          <p>{this.state.park.city}, {this.state.park.state} {this.state.park.zip}</p>
        </div>
        <div>
          <img src="{this.state.park.photo_url}" />
        </div>
        <div>
          <ReviewsIndex
            reviews={this.state.park.reviews}
            handleClick={handleClick}
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
