import React, { Component } from 'react'

class ParkShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      park: {}
    }
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/parks/2")
      .then(response => response.json())
      .then(json => {
        let park = json.park
        this.setState({ park: park })
      });
  }


  render() {
    console.log(this.state.park)
    return(
      <div>
        {this.state.park.name}
      </div>
    )
  }
}

export default ParkShowContainer
