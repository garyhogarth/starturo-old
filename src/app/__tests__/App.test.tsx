import React from 'react'
import { render } from 'react-native-testing-library'

import { App } from '#starturo/app/App'

const createTestProps = (props?: object) => ({
  ...props,
})

describe('App', () => {
  const props = createTestProps()
  const { toJSON } = render(<App {...props} />)

  it('should render a welcome', () => {
    expect(toJSON).toBeDefined()
  })
})
