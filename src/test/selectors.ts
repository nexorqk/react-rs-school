import { describe, expect, it, vi } from 'vitest'

describe('Redux selectors', () => {
    const create = () => {
        const store = {
            getState: vi.fn(() => ({})),
            dispatch: vi.fn(),
        }
        const next = vi.fn()

        return { store, next }
    }

    it('passes through non-function action', () => {
        const { next } = create()
        const action = { type: 'TEST' }
        expect(next).toHaveBeenCalledWith(action)
    }),
        it('should select ')
})
