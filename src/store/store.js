import { reducers } from './reducers/reducers'
import { createStore } from 'redux'

export function configureStore(initialState = {}) {
  const store = createStore(reducers, initialState)
  return store
}

export const store = configureStore()
