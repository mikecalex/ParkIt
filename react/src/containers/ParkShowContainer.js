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
        this.setState({ park: json.park, reviews: json.reviews })
      });
  }


  render() {
     return(
      <div>
        <div>
          <h1>{this.state.park.name}</h1>
          <h5>Type of park: {this.state.park.category}</h5>
          <h5>Size of park: {this.state.park.size}</h5>
          <p>Description: {this.state.park.description}</p>
          <div>
          <p>{this.state.park.address}</p>
          <p>{this.state.park.city}, {this.state.park.state} {this.state.park.zip}</p>
          </div>
        </div>
        <div>
          <img src="{this.state.park.photo_url}" />
        </div>
        <div>
          <ReviewsIndex
            reviews={this.state.reviews}
          />
        </div>
      </div>
    )
  }
}

export default ParkShowContainer
