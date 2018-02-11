import React, { Component } from 'react'
import Console from './console/Console'
import HistoryListContainer from './history/containers/HistoryListContainer'

class App extends Component {
  render() {
    return (
      <div>
        <h1>React API Tester</h1>
        <Console />
        <HistoryListContainer />
      </div>
    )
  }
}

export default App
