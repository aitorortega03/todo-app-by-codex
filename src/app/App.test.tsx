import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App.tsx'

describe('App', () => {
  it('renders the phase 1 foundation message', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', {
        name: /the foundation for a polished react todo app is ready/i,
      }),
    ).toBeInTheDocument()
  })
})
