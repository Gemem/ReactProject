import { useId } from 'react'
import { CATEGORIES } from '../categories'

function formatCurrency(amount) {
  return amount.toLocaleString(undefined, {
    style: 'currency',
    currency: 'USD',
  })
}

function useBudgetInputId(category) {
  const base = useId()
  return `${base}-${category}`
}

function CategoryBudgetRow({ category, spent, budget, onChangeBudget }) {
  const inputId = useBudgetInputId(category)
  const hasBudget = budget > 0

  return (
    <li className="budget-row">
      <div className="budget-header">
        <label htmlFor={inputId}>{category}</label>
        <input
          id={inputId}
          type="number"
          min="0"
          step="0.01"
          value={budget || ''}
          placeholder="No limit"
          onChange={(event) => onChangeBudget(category, event.target.value)}
          inputMode="decimal"
        />
      </div>

      <div className="budget-status">
        <span>
          {formatCurrency(spent)}
          {hasBudget && <> / {formatCurrency(budget)}</>}
        </span>
      </div>
    </li>
  )
}

function CategoryBudgets({ expenses, budgets, onChangeBudget }) {
  const spentByCategory = CATEGORIES.reduce((totals, category) => {
    totals[category] = expenses
      .filter((expense) => expense.category === category)
      .reduce((sum, expense) => sum + expense.amount, 0)
    return totals
  }, {})

  return (
    <section className="category-budgets" aria-label="Category budgets">
      <h2>Budgets</h2>
      <ul className="budget-list">
        {CATEGORIES.map((category) => (
          <CategoryBudgetRow
            key={category}
            category={category}
            spent={spentByCategory[category]}
            budget={budgets[category] ?? 0}
            onChangeBudget={onChangeBudget}
          />
        ))}
      </ul>
    </section>
  )
}

export default CategoryBudgets
