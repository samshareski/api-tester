import React, { Component } from 'react'
import History from './History'

class HistoryList extends Component {
  render() {
    return (
      <ul className="one">
        {this.props.historyList.map((history, index) => (
          <History key={index} history={history.response} />
        ))}
      </ul>
    )
  }
}

export default HistoryList
