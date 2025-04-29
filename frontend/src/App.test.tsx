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
  render(<App />);
  // 使用更宽松的选择器
  const optimizeButton = screen.getByRole('button', { name: /optimize/i });
  
  console.log(`期望: "Optimize Prompt", 实际: "${optimizeButton.textContent}"`);
  
  expect(optimizeButton.textContent).toBe('Optimize Prompt');
})