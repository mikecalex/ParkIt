import React from 'react'

const ParkTextInputField = props => {
  return(
    <label>{props.label}
      <input
        type='text'
        value={props.value}
        name={props.name}
        onChange={props.handleChange}
        placeholder={props.placeholder}
      />
    </label>
  )
}

export default ParkTextInputField
