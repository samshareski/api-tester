import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import HistoryReducer from './HistoryReducer'

describe('HistoryReducer', () => {
  it('returns same state for unknown actions', () => {
    const defaultState = []
    let state = HistoryReducer(defaultState, { type: 'UNKNOWN' })
    expect(state).toEqual(defaultState)
  })

  it('adds ADD_RESPONSE actions to state', () => {
    const defaultState = []
    let state = HistoryReducer(defaultState, {
      type: 'ADD_RESPONSE',
      response: 'Foo'
    })
    expect(state).toEqual([{ response: 'Foo' }])
  })
})
