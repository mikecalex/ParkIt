import React, { Component } from 'react'
import ReviewTextInputField from '../components/ReviewTextInputField'

class ReviewFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rating: '',
      body: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    let value = event.target.value
    let name = event.target.name
    this.setState({ [name]: value })
  }

  handleSubmit(event) {
    event.preventDefault()
    let formPayload = {
      rating: parseInt(this.state.rating),
      body: this.state.body,
      park_id: this.props.park.id,
      user_id: this.props.user.id
    }
    this.props.handleSubmit(formPayload)
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <ReviewTextInputField
          label='Rating'
          value={this.state.rating}
          name='rating'
          handleChange={this.handleChange}
        />
        <ReviewTextInputField
          label='Body'
          value={this.state.body}
          name='body'
          handleChange={this.handleChange}
        />
        <input type='submit' value='Submit'/>
      </form>
    )
  }
}



export default ReviewFormContainer
