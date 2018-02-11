import React, { Component } from 'react'
import History from './History'

class HistoryList extends Component {

    render() {
        return (
        <ul>
            {this.props.historyList.map((history, index) => (
            <History key={index} method={history.response.method} 
            url={history.response.url}  body={history.response.body} response={history.response.response}/>
            ))}
        </ul>
        )
    }
}

export default HistoryList