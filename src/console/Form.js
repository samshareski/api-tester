import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      method: 'GET',
      url: '',
      body: ''
    }
  }

  handleMethodChange = event => {
    this.setState({ method: event.target.value })
  }

  handleUrlChange = event => {
    this.setState({ url: event.target.value })
  }

  handleBodyChange = event => {
    this.setState({ body: event.target.value })
  }

  handleSubmit = event => {
    this.props.submitFormData(this.state)
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <select
          name="method"
          value={this.state.method}
          onChange={this.handleMethodChange}
        >
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="DELETE">DELETE</option>
        </select>
        <input
          type="text"
          name="url"
          placeholder="http://example.com/api"
          value={this.state.url}
          onChange={this.handleUrlChange}
        />
        {(this.state.method === 'POST' || this.state.method === 'PUT') && (
          <textarea
            name="body"
            rows="5"
            cols="30"
            placeholder={'{\n  "id": 1\n}'}
            value={this.state.body}
            onChange={this.handleBodyChange}
          />
        )}
        <input type="submit" value="TEST" />
      </form>
    )
  }
}

Form.propTypes = {
  submitFormData: PropTypes.func.isRequired
}

export default Form
