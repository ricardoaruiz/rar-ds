import { render } from '@testing-library/react'

import { Box } from './Box'

describe('Box', () => {
  it('teste', () => {
    const { container } = render(<Box />)
    expect(container).toBeInTheDocument()
  })
})
