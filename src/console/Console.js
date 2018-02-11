import React, { Component } from 'react'
import Form from './Form'
import Display from './Display'
import makeApiRequest from './api-tester'
import HistoryListContainer from './containers/HistoryListContainer'

class Console extends Component {
  constructor(props) {
    super(props)
    this.state = {
      response: null
    }
  }

  testApi = formData => {
    makeApiRequest(formData).then(response => {
      this.setState({ response: response })
    })
  }

  render() {
    return (
      <div>
        <Display response={this.state.response} />
        <Form submitFormData={this.testApi} />
        <HistoryListContainer/>
      </div>
    )
  }
}

export default Console
