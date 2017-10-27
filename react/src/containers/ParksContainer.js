import React, { Component } from 'react'
import ParksIndex from '../components/ParksIndex'
import ParkFormContainer from './ParkFormContainer'

class ParksContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parks: [],
      user: {}

    }
    this.addNewPark = this.addNewPark.bind(this)
    this.getParks = this.getParks.bind(this)
    this.getUser = this.getUser.bind(this)
  }

  componentDidMount() {
    this.getParks()
    this.getUser()
  }

  getUser() {
    fetch('api/v1/users', {
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin'
    })
      .then(response => response.json())
      .then(json => {
        this.setState({ user: json.user });
      });
  }

  getParks() {
    fetch('api/v1/parks', {
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin'
    })
      .then(response => response.json())
      .then(json => {
        this.setState({ parks: json.parks });
      });
  }

  addNewPark(formPayload) {
    fetch('api/v1/parks', {
      method: 'POST',
      body: JSON.stringify(formPayload),
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin'
    })
      .then(response => response.json())
      .then(json => {
        let newParksArray = this.state.parks.concat(json.park)
        this.setState({ parks: newParksArray })
      })
  }

  render() {
    let handleSubmit = (formPayload) => {
      this.addNewPark(formPayload)
    }

    return(
      <div>
        <div className="hero">
          <img width="100%" className="hero-image" src="https://scontent.fbed1-2.fna.fbcdn.net/v/t1.0-9/22853052_10105640791126263_6186633322118658729_n.jpg?oh=65c315aa3fce121f51d13de3cdef4f35&oe=5A71BCD4"/>
        </div>
        <div className="row column text-center">
          <h1>Parks</h1>

        </div>
        <ParksIndex
          parks={this.state.parks}
        />
        <div className="row small-up-2 large-up-2">
          <div className="column">
        <ParkFormContainer
          user={this.state.user}
          handleSubmit={handleSubmit}
        />
        </div>
        </div>
      </div>
    )
  }
}



export default ParksContainer
