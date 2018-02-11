import { combineReducers } from 'redux'
import historyList from './history'
import responseCounter from './responseCounter'

export const reducers = combineReducers({
  historyList,
  responseCounter
})
