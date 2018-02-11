import React, { Component } from 'react'

class History extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showDetails: false
    }
  }

  toggleDetails = () => {
    this.setState(prevState => ({ showDetails: !prevState.showDetails }))
  }

  render() {
    return (
      <li onClick={() => this.toggleDetails()}>
        <h3>{this.props.history.method}</h3>
        <h3>{this.props.history.url}</h3>
        {this.state.showDetails && (
          <pre>
            <strong>Response:</strong>
            {this.props.history.response}
          </pre>
        )}
        {this.state.showDetails && (
          <pre>
            <strong>Request Body:</strong>
            {this.props.history.body}
          </pre>
        )}
      </li>
    )
  }
}

export default History
