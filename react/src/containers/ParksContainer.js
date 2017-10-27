import React, { Component } from 'react'
import ParksIndex from '../components/ParksIndex'
import ParkFormContainer from './ParkFormContainer'

class ParksContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parks: []
    }
    this.addNewPark = this.addNewPark.bind(this)
    this.getParks = this.getParks.bind(this)
  }

  componentDidMount() {
    this.getParks()
  }

  getParks() {
    fetch('api/v1/parks', {
      credentials: 'same-origin'
    })
      .then(response => response.json())
      .then(json => {
      let currentUser = json.user;
        this.setState({ parks: json });
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
        <h1>
          Parks
        </h1>
        <ParksIndex
          parks={this.state.parks}
        />
        <ParkFormContainer
          user={this.state.user}
          handleSubmit={handleSubmit}
        />
      </div>
    )
  }
}



export default ParksContainer
