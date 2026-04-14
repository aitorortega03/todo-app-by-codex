import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App.tsx'

describe('App', () => {
  it('renders the main product heading', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', {
        name: /your day, clearly under control/i,
      }),
    ).toBeInTheDocument()
  })
})
