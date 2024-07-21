import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Loader from '../src/components/loader/Loader'

describe('Loader', () => {
  it('renders the loader element', () => {
    render(<Loader />)
    const loaderElement = screen.getByRole('region')
    expect(loaderElement).toBeInTheDocument()
  })
})
