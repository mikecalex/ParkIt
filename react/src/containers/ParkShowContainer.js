import React, { Component } from 'react'
import ReviewsIndex from './ReviewsIndex';

class ParkShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      park: {
        reviews: []
      },
      votes: []
    }
    this.addNewVote = this.addNewVote.bind(this)
    this.getVotes = this.getVotes.bind(this)
    this.getPark = this.getPark.bind(this)
  }

  componentDidMount() {
    this.getVotes();
    this.getPark();
  }

  getPark() {
    let parkId = this.props.match.params.id
    fetch(`/api/v1/parks/${parkId}`, {
      credentials: 'same-origin'
    })
      .then(response => response.json())
      .then(json => {
        this.setState({ park: json })
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

  addNewVote(votePayload) {
    fetch('/api/v1/votes', {
      method: 'POST',
      body: JSON.stringify(votePayload),
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin'
    })
      .then(response => response.json())
      .then(json => {
        let newVotes = this.state.votes.concat(json)
        this.setState({ votes: newVotes })
      })
    // this.getVotes()
  }

  render() {
    console.log(this.state.votes)
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
      </div>
    )
  }
}

export default ParkShowContainer
