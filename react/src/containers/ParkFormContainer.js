import React, { Component } from 'react'
import ParkTextInputField from '../components/ParkTextInputField'

class FormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      parkName: '',
      parkAddress: '',
      parkCity: '',
      parkState: '',
      parkZip: '',
      parkCategory: '',
      parkDescription: '',
      parkPhotoUrl: '',
      parkSize: '',
      userId: 2
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClearForm = this.handleClearForm.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    let value = event.target.value
    let name = event.target.name
    this.setState({ [name]: value })
  }

  handleClearForm() {
    this.setState({
      parkName: '',
      parkAddress: '',
      parkCity: '',
      parkState: '',
      parkZip: '',
      parkCategory: '',
      parkDescription: '',
      parkPhotoUrl: '',
      parkSize: ''
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    let formPayload = {
      name: this.state.parkName,
      address: this.state.parkAddress,
      city: this.state.parkCity,
      state: this.state.parkState,
      zip: this.state.parkZip,
      category: this.state.parkCategory,
      description: this.state.parkDescription,
      photo_url: this.state.parkPhotoUrl,
      size: this.state.size,
      user_id: this.state.userId
    }
    this.props.handleSubmit(formPayload)
    // this.handleClearForm()
  }

  render() {
    return(
      
      <form onSubmit={this.handleSubmit}>
        <ParkTextInputField
          label='Name'
          value={this.state.parkName}
          name='parkName'
          handleChange={this.handleChange}
        />
        <ParkTextInputField
          label='Address'
          value={this.state.parkAddress}
          name='parkAddress'
          handleChange={this.handleChange}
        />
        <ParkTextInputField
          label='City'
          value={this.state.parkCity}
          name='parkCity'
          handleChange={this.handleChange}
        />
        <ParkTextInputField
          label='State'
          value={this.state.parkState}
          name='parkState'
          handleChange={this.handleChange}
        />
        <ParkTextInputField
          label='Zip'
          value={this.state.parkZip}
          name='parkZip'
          handleChange={this.handleChange}
        />
        <ParkTextInputField
          label='Category'
          value={this.state.parkCategory}
          name='parkCategory'
          placeholder='e.g. Marine, National, State, Water'
          handleChange={this.handleChange}
        />
        <ParkTextInputField
          label='Description'
          value={this.state.parkDescription}
          name='parkDescription'
          handleChange={this.handleChange}
        />
        <ParkTextInputField
          label='Photo URL'
          value={this.state.parkPhotoUrl}
          name='parkPhotoUrl'
          handleChange={this.handleChange}
        />
        <ParkTextInputField
          label='Size'
          value={this.state.parkSize}
          name='parkSize'
          placeholder='Number of Acres'
          handleChange={this.handleChange}
        />
        <input type='submit' value='Submit'/>
      </form>
    )
  }
}

export default FormContainer
