import { connect } from 'react-redux'
import HistoryList from '../HistoryList'

const mapStateToProps = (state, ownProps) => ({
  historyList: state
})

const HistoryListContainer = connect(mapStateToProps)(HistoryList)

export default HistoryListContainer
