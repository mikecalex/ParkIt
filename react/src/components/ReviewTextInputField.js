import React from 'react'

const ReviewTextInputField = props => {
  return(
    <label>{props.label}
      <input
        type='text'
        value={props.value}
        name={props.name}
        onChange={props.handleChange}
        className='input-field'
      />
    </label>
  )
}

export default ReviewTextInputField
