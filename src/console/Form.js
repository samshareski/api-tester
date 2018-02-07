import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      method: 'GET',
      url: ''
    }
  }

  handleMethodChange = event => {
    this.setState({ method: event.target.value })
  }

  handleUrlChange = event => {
    this.setState({ url: event.target.value })
  }

  handleSubmit = event => {
    alert(JSON.stringify(this.state))
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
        <input type="submit" value="TEST" />
      </form>
    )
  }
}

export default Form
