import React, { Component } from 'react'
import ReviewsIndex from './ReviewsIndex';

class ParkShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      park: {},
      reviews: []
    }
  }

  componentDidMount() {
    let parkId = this.props.match.params.id
    fetch(`/api/v1/parks/${parkId}`)
      .then(response => response.json())
      .then(json => {
        this.setState({ park: json })
      });
  }


  render() {
     return(
      <div>
        <div>
          {this.state.park.name}
          {this.state.park.address}
        </div>
        <div>
          <ReviewsIndex
            reviews={this.state.park.reviews}
          />
        </div>
      </div>
    )
  }
}

export default ParkShowContainer
