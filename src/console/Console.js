import React, { Component } from 'react'
import Form from './Form'
import Display from './Display'
import makeApiRequest from './api-tester'

class Console extends Component {
  constructor(props) {
    super(props)
    this.state = {
      response: null
    }
  }

  testApi = formData => {
    this.setState({ response: makeApiRequest(formData.method, formData.url) })
  }

  render() {
    return (
      <div className="two">
        <Display response={this.state.response} />
        <Form submitFormData={this.testApi} />
      </div>
    )
  }
}

export default Console
