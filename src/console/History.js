import React, { Component } from 'react'

class History extends Component {

    constructor(props) {
        super(props)
        this.state = {
            body: '',
            response: ''
        }
    }

    viewResponse = id => {
        this.setState({
            body: this.props.historyList[id].response.body,
            response: JSON.stringify(this.props.historyList[id].response.response)
        })
    }

    render() {
        return (
            <li
                onClick={() => this.viewResponse(this.props.id)}>
                {this.props.method}
                {this.props.url}
                {this.state.body}
                {this.state.response}
            </li>
        )
    }
}

export default History