import { render } from '@testing-library/react'
import React from 'react'
import 'jest-styled-components'
import { Home, HOME_TEST_ID } from 'src/pages/Home'

describe('[pages] Home', () => {
  it('should render correctly', () => {
    const renderer = render(<Home />)
    const renderedElement = renderer.getByTestId(HOME_TEST_ID)

    expect(renderedElement).toBeTruthy()
  })
})
