import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import NotFound from '../pages/404'

it('Not Found page exist', () => {
  render(<NotFound />)

  const text = screen.getByRole('heading')
  expect(text.textContent).toEqual('404 - Not Found')
})
