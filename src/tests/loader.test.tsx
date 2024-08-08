import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Loader } from '../components/loader/Loader'
import '@testing-library/jest-dom/vitest'

describe('Loader', () => {
  it('renders the loader element', () => {
    render(<Loader />)
    const loaderElement = screen.getByRole('region')
    expect(loaderElement).toBeInTheDocument()
  })
})
