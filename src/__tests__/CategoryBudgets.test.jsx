import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
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
})
