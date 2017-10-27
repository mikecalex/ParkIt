import React from 'react';
import ParkTile from './ParkTile'

const ParksIndex = props => {
  let parks = props.parks.map(park => {
    return(
      <ParkTile
        key={park.id}
        id={park.id}
        name={park.name}
        photo={park.photo_url}
      />
    )
  })

  return(
    <ul key={"park-listing"}>
      {parks}
    </ul>
  )
}

export default ParksIndex
