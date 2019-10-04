import { createStore } from 'redux'
import { combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import { counterReducer, CounterState } from '#starturo/examples/counter'

/**
 * Build the root reducer
 */

export interface AppState {
  counter: CounterState
}

export const rootReducer = combineReducers({
  counter: counterReducer,
})

export const store = createStore(rootReducer, composeWithDevTools())
