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
            reviews={this.state.reviews}
          />
        </div>
      </div>
    )
  }
}

export default ParkShowContainer
