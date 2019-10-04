import React from 'react'

import { AuthLoading } from '#starturo/auth/AuthLoading'
import { renderWithStore } from '#starturo/testing'

describe('<AuthLoading />', () => {
  const { toJSON } = renderWithStore(<AuthLoading />)
  it('renders', () => {
    expect(toJSON).toBeDefined()
  })
})
