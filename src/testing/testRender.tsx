import React from 'react'
import { render } from 'react-native-testing-library'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

// Local
import { rootReducer } from '#starturo/app'

export const renderWithStore = (children: any, { initialState = {} } = {}) => {
  const store = createStore(rootReducer, initialState)
  return {
    ...render(<Provider store={store}>{children}</Provider>),
    store,
  }
}
