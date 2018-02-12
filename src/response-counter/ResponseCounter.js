import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chart from 'chart.js'
import { resetSuccessRate } from '../store/actions'

class ResponseCounter extends Component {
  getChartDataFromProps(props) {
    const success = props.responseCounter.successCount
    const failure = props.responseCounter.totalCount - success
    return [success, failure]
  }

  componentDidMount() {
    const ctx = this.canvas

    this.chart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Success', 'Failure'],
        datasets: [
          {
            data: this.getChartDataFromProps(this.props),
            backgroundColor: ['#008000', '#FF0000']
          }
        ]
      }
    })
  }

  componentDidUpdate() {
    this.chart.data.datasets[0].data = this.getChartDataFromProps(this.props)
    this.chart.update()
  }

  render() {
    return (
      <div>
        <canvas ref={canvas => (this.canvas = canvas)} />
        <button onClick={this.props.reset}>Reset</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  responseCounter: state.responseCounter
})

const mapDispatchToProps = dispatch => ({
  reset: () => dispatch(resetSuccessRate())
})

export default connect(mapStateToProps, mapDispatchToProps)(ResponseCounter)
