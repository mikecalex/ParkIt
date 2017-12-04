import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import ParksContainer from './containers/ParksContainer'
import ParkShowContainer from './containers/ParkShowContainer'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {}
    }
    this.loadUserData = this.loadUserData.bind(this)
  }

  componentDidMount() {
    this.loadUserData();
  }

  loadUserData() {
   fetch('/api/v1/users', {
     credentials: 'same-origin',
     method: 'GET',
     headers: {'Content-Type': 'application/json'}
   })
   .then(response => {
     if (response.ok) {
       return response;
     }
   })
   .then(response => response.json())
   .then(json => {
     this.setState({
       currentUser: json.user
     })
   })
 }

   render() {
    return(
      <Switch>
        <Route exact path="/" render={props => (
            <ParksContainer {...props} currentUser={this.state.currentUser} />
          )}/>

        <Route exact path="/parks" component={ParksContainer} />
        <Route exact path="/parks/:id" render={props => (
            <ParkShowContainer {...props} currentUser={this.state.currentUser} />
          )}/>

      </Switch>
    )
  }
}

export default App
