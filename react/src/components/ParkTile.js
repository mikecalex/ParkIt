import React from 'react';
import { Link } from 'react-router-dom';

const ParkTile = props => {

  return(

    <div className="row small-up-2 large-up-4">
      <div className="column">
        <Link to={`/parks/${props.id}`}>
        <img className="thumbnail" src={props.photo}/>
        <h5>{props.name}</h5>
        </Link>


      </div>
    </div>
  )
}

export default ParkTile
