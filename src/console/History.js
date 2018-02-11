import React, { Component } from 'react'

class History extends Component {

    constructor(props) {
        super(props)
        this.state = {
            body: '',
            response: ''
        }
    }

    viewResponse = () => {
        this.setState({
            body: JSON.stringify(this.props.history.body),
            response: JSON.stringify(this.props.history.response)
        })
    }

    render() {
        return (
            <li
                onClick={() => this.viewResponse()}>
                {this.props.history.method}
                {this.props.history.url}
                {this.state.body}
                {this.state.response}
            </li>
        )
    }
}

export default History