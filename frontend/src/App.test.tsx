import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
    expect(document.body.innerHTML).toBeTruthy()
  })
})
it('displays "Optimize Prompt" text on the optimization button', () => {
  render(<App />)
  const optimizeButton = screen.getByRole('button', { name: /optimize prompt/i })
  expect(optimizeButton.textContent).toBe('Optimize Prompt')
})