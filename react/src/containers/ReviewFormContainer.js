import React, { Component } from 'react'
import ReviewTextInputField from '../components/ReviewTextInputField'
import SweetAlert from 'sweetalert-react';

class ReviewFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rating: '',
      body: '',
      isOpen: false,
      alert: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.hideAlert = this.hideAlert.bind(this)
  }

  hideAlert() {
    this.setState({
      alert: !this.state.alert
    });
  }

  toggleModal() {
    if (!this.props.currentUser) {
      this.setState({
        alert: !this.state.alert
      });
      } else {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
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
        <SweetAlert
          show={this.state.alert}
          title="You must sign in first!"
          onConfirm={this.hideAlert}
        />
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
        <input className="form-button" type='submit' value='Submit' onClick={this.toggleModal}/>
      </form>
    )
  }
}



export default ReviewFormContainer
