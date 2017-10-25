import React from 'react';
import { Link } from 'react-router-dom';

const ParkTile = props => {

  return(
    <div>
      <li>
        <Link to={`/parks/${props.id}`}>
          {props.name}
        </Link>
      </li>
    </div>
  )
}

export default ParkTile
