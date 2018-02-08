import React, { Component } from 'react'
import PropTypes from 'prop-types'

const URL_REGEX = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      method: 'GET',
      url: '',
      body: '',
      submitted: false
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
    this.setState({
      submitted: true
    })

    const errors = this.validate(
      this.state.method,
      this.state.url,
      this.state.body
    )

    if (errors.length === 0) {
      this.props.submitFormData({
        method: this.state.method,
        url: this.state.url,
        body: this.state.body
      })

      // After successful submission reset form state
      this.setState({
        submitted: false
      })
    }

    event.preventDefault()
  }

  validate = (method, url, body) => {
    const errors = []

    if (!URL_REGEX.test(url)) {
      errors.push('Invalid URL')
    }

    if (method === 'POST' || method === 'PUT') {
      try {
        JSON.parse(body)
      } catch (e) {
        errors.push('Invalid JSON')
      }
    }

    return errors
  }

  render() {
    let hasErrors = false
    let errors = []
    if (this.state.submitted) {
      errors = this.validate(this.state.method, this.state.url, this.state.body)
      hasErrors = errors.length > 0
    }

    return (
      <form onSubmit={this.handleSubmit}>
        {hasErrors && errors.map((error, index) => <p key={index}>{error}</p>)}
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
