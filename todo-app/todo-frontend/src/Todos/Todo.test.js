import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Todo from './Todo'

test('renders content', () => {
  const todo = {
    text: 'Test todo',
    done: false
  }
  const mockOnClickDelete = jest.fn()
  const mockOnClickComplete = jest.fn()

  render(<Todo todo={todo} onClickComplete={mockOnClickComplete} onClickDelete={mockOnClickDelete} />)

  expect(screen.getByText('Test todo')).toBeDefined()
})