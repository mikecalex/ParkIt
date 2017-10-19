import React, { Component } from 'react'
import ParksIndex from '../components/ParksIndex'

class ParksContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parks: []
    }
  }


  componentDidMount() {
    fetch('api/v1/parks')
      .then(response => response.json())
      .then(json => {
        let allParks = json.parks
        this.setState({ parks: allParks })
      });
  }

  render() {
    console.log(this.state)





    // let rootDiv = document.getElementById("app");
    // console.log(rootDiv);
    // let parks = rootDiv.data.parks
    // console.log(parks);

    return(
      <div>
        <h1>
          Parks
        </h1>
        <ParksIndex
          parks={this.state.parks}
        />
      </div>
    )
  }
}



export default ParksContainer
