import { render } from '@testing-library/react'

import { Checkbox } from '.'

describe('<Switch />', () => {
  it('should be render correctly', () => {
    const { container } = render(<Checkbox />)
    expect(container).toBeInTheDocument()
  })
})
