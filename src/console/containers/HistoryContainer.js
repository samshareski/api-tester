import { connect } from 'react-redux'
import History from '../History'

const mapStateToProps = (state, ownProps) => ({ 
    historyList : state
});

const HistoryContainer = connect(  
    mapStateToProps
)(History)

export default HistoryContainer