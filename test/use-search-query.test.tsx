import { renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import useSearchQuery from '../src/hooks/useSearchQuery'

describe('useSearchQuery', () => {
  it('Should set to localstorage', () => {
    const { result } = renderHook(useSearchQuery, {
      initialProps: localStorage.setItem('searchInput', 'John'),
    })

    expect(result.current.lsSearch).toBe('John')
  })
})
