import React, { Component } from 'react'
import ReviewsIndex from './ReviewsIndex';
import ReviewFormContainer from './ReviewFormContainer'
import { Link } from 'react-router-dom';

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
          <h2>{this.state.park.name}</h2>
          <div class="row">
              <div class="small-9 push-3 columns">
                <h4>Description:</h4>
                <p>{this.state.park.description}</p>
              </div>
              <div class="small-3 pull-9 columns">
                <ul class="side-nav">
                  <p><img width="460px" height="320px" src={this.state.park.photo_url}/></p>
                  <p>Address:{this.state.park.address}</p>
                  <p>City:{this.state.park.city}</p>
                  <p>State:{this.state.park.state}</p>
                </ul>
              </div>
          </div>
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
        <div>
          <Link className="back-button" to='/'>Back</Link>
          { this.props.children }
        </div>
      </div>
    )
  }
}

export default ParkShowContainer
