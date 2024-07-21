import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import ErrorBoundary from '../src/components/error-boundary/ErrrorBoundary'

const Child = () => {
  throw new Error()
}

describe('Error Boundary', () => {
  it('should render error boundary component when there is an error', () => {
    const { getByText } = render(
      <ErrorBoundary>
        <Child />
      </ErrorBoundary>
    )
    const errorMessage = getByText('Something went wrong.')
    expect(errorMessage).toBeDefined()
  })
})
