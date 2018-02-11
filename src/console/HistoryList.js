import React, { Component } from 'react'
import HistoryContainer from './containers/HistoryContainer'

class HistoryList extends Component {

    render() {
        return (
        <ul>
            {this.props.historyList.map(history => (
            <HistoryContainer key={history.id} id={history.id} method={history.response.method} url={history.response.url} />
            ))}
        </ul>
        )
    }
}

export default HistoryList