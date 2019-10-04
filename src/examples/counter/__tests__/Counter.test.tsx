import React from 'react'
import { fireEvent } from 'react-native-testing-library'

import { Counter } from '#starturo/examples/counter'
import { renderWithStore } from '#starturo/testing'

describe('<Counter />', () => {
  const { getByTestId, toJSON } = renderWithStore(<Counter />, {
    initialState: {
      counter: {
        count: 0,
      },
    },
  })

  const counterIncButton = getByTestId('Counter Button Increment')
  const counterDecButton = getByTestId('Counter Button Decrement')
  const counterText = getByTestId('Counter Text')

  const reduxCounterIncButton = getByTestId('Counter Redux Button Increment')
  const reduxCounterDecButton = getByTestId('Counter Redux Button Decrement')
  const reduxCounterText = getByTestId('Counter Redux Text')

  it('renders', () => {
    expect(toJSON).toBeDefined()
  })

  it('has the correct elements', () => {
    expect(toJSON).toBeDefined()
    expect(counterIncButton).toBeDefined()
    expect(counterDecButton).toBeDefined()
    expect(counterText).toBeDefined()

    expect(counterText.props.children).toEqual(0)

    expect(reduxCounterIncButton).toBeDefined()
    expect(reduxCounterDecButton).toBeDefined()
    expect(reduxCounterText).toBeDefined()

    expect(reduxCounterText.props.children).toEqual(0)
  })

  it('has working increment button', () => {
    fireEvent.press(counterIncButton)
    expect(counterText.props.children).toEqual(1)
  })

  it('has working decrement button', () => {
    fireEvent.press(counterDecButton)
    expect(counterText.props.children).toEqual(0)
  })

  it('has working increment button (Redux)', () => {
    fireEvent.press(reduxCounterIncButton)
    expect(reduxCounterText.props.children).toEqual(1)
  })

  it('has working decrement button (Redux)', () => {
    fireEvent.press(reduxCounterDecButton)
    expect(reduxCounterText.props.children).toEqual(0)
  })
})
