import React, { Component } from 'react'
import Console from './console/Console'
import HistoryListContainer from './history/containers/HistoryListContainer'

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Console />
        <HistoryListContainer />
      </div>
    )
  }
}

export default App
