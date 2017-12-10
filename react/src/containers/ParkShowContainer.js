import React, { Component } from 'react'
import ReviewsIndex from './ReviewsIndex';
import ReviewFormContainer from './ReviewFormContainer'
import { Link } from 'react-router-dom';
import SweetAlert from 'react-bootstrap-sweetalert'

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
        this.setState({ user: json.current_user });
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
    debugger
    fetch("/api/v1/reviews", {
      method: 'POST',
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formPayload)
    })
      .then((response) => console.log(response.json))
      // .then(json => {
      //   let newReviewsArray = this.state.reviews.concat(json.review)
      //   this.setState({ reviews: newReviewsArray })
      // })
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
    // debugger
     return(
      <div className='show-page'>
        <div>
          <h2>{this.state.park.name}</h2>
          <div className="show-page-tile">
            <div className="side-nav">
              <p><img className='show-image' src={this.state.park.photo_url}/></p>
              <br></br>
              <h4>{this.state.park.description}</h4>
              <p>Address: {this.state.park.address}</p>
              <p>City: {this.state.park.city}</p>
              <p>State: {this.state.park.state}</p>
            </div>

          </div>
        </div>
        <div>
          <ReviewFormContainer
            currentUser={this.props.currentUser}
            user={this.state.user}
            park={this.state.park}
            handleSubmit={handleSubmit}
          />
        </div>
        <div>
          <Link className="back-button" to='/'>Back</Link>
          { this.props.children }
        </div>
        <div className='review-title'>Reviews:</div>
        <div>
          <ReviewsIndex
            reviews={this.state.park.reviews}
            handleClick={handleClick}
          />
        </div>
      </div>
    )
  }
}

export default ParkShowContainer
