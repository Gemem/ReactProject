import { describe, expect, it, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import CategoryBudgets from '../components/CategoryBudgets'

const expenses = [
  { id: '1', description: 'Lunch', amount: 40, category: 'Food' },
  { id: '2', description: 'Dinner', amount: 30, category: 'Food' },
]

describe('CategoryBudgets', () => {
  it('shows the amount spent per category', () => {
    render(
      <CategoryBudgets
        expenses={expenses}
        budgets={{ Food: 100 }}
        onChangeBudget={vi.fn()}
      />,
    )

    expect(screen.getByText(/\$70\.00 \/ \$100\.00/)).toBeInTheDocument()
  })

  it('calls onChangeBudget when the budget input changes', () => {
    const handleChange = vi.fn()
    render(
      <CategoryBudgets
        expenses={expenses}
        budgets={{}}
        onChangeBudget={handleChange}
      />,
    )

    const input = screen.getByLabelText('Food')
    fireEvent.change(input, { target: { value: '75' } })

    expect(handleChange).toHaveBeenCalledWith('Food', '75')
  })
})
