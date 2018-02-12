import React, { Component } from 'react'
import History from './History'

class HistoryList extends Component {
  render() {
    return (
      <div className="two">
        <ul>
          {this.props.historyList.map((history, index) => (
            <History key={index} history={history.response} />
          ))}
        </ul>
      </div>
    )
  }
}

export default HistoryList
