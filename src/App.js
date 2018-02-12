import React, { Component } from 'react'
import Console from './console/Console'
import HistoryListContainer from './history/containers/HistoryListContainer'
import ResponseCounter from './response-counter/ResponseCounter'

class App extends Component {
  render() {
    return (
      <div>
        <h1>React API Tester</h1>
        <div className="wrapper">
          <Console />
          <ResponseCounter />
          <HistoryListContainer />
        </div>
      </div>
    )
  }
}

export default App
