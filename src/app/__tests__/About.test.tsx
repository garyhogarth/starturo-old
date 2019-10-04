import React from 'react'

import { About } from '#starturo/app/About'
import { renderWithStore } from '#starturo/testing'

describe('<About />', () => {
  const { toJSON } = renderWithStore(<About />)

  it('renders', () => {
    expect(toJSON).toBeDefined()
  })
})
