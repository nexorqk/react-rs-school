import { render } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import ErrorBoundary from '../components/error-boundary/ErrrorBoundary'

describe('Error Boundary', () => {
    it('should render error boundary component when there is an error', () => {
        const spy = vi.spyOn(console, 'error')
        spy.mockImplementation(() => {
            console.log('mockImplementation')
        })

        const Throw = () => {
            throw new Error('bad')
        }

        const { getByText } = render(
            <ErrorBoundary>
                <Throw />
            </ErrorBoundary>
        )
        const errorMessage = getByText('Something went wrong.')
        expect(errorMessage).toBeDefined()

        spy.mockRestore()
    })
})
