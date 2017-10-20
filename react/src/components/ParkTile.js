import React from 'react';

const ParkTile = props => {
  return(
    <li>
      <a href={`/parks/${props.id}`}>
        {props.name}
      </a>
    </li>
  )
}

export default ParkTile
