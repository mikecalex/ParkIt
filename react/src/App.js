import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ParksContainer from './containers/ParksContainer'
import ParkShowContainer from './containers/ParkShowContainer'

const App = props => {
  return(
    <Switch>
      <Route exact path="/" component={ParksContainer} />
      <Route exact path="/parks" component={ParksContainer} />
      <Route exact path="/parks/:id" component={ParkShowContainer} />
    </Switch>
  )
}

export default App
