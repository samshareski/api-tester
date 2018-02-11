import React from 'react'
import { connect } from 'react-redux'
import { resetSuccessRate } from '../store/actions'

const ResponseCounter = ({ responseCounter, reset }) => (
  <div>
    <pre>{JSON.stringify(responseCounter)}</pre>
    <button onClick={reset}>Reset</button>
  </div>
)

const mapStateToProps = state => ({
  responseCounter: state.responseCounter
})

const mapDispatchToProps = dispatch => ({
  reset: () => dispatch(resetSuccessRate())
})

export default connect(mapStateToProps, mapDispatchToProps)(ResponseCounter)
