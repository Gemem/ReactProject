import { useId } from 'react'
import { CATEGORIES } from '../categories'

function useBudgetInputId(category) {
  const base = useId()
  return `${base}-${category}`
}

function CategoryBudgetRow({ category, budget, onChangeBudget }) {
  const inputId = useBudgetInputId(category)

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
        />
      </div>
    </li>
  )
}

function CategoryBudgets({ budgets, onChangeBudget }) {
  return (
    <section className="category-budgets" aria-label="Category budgets">
      <h2>Budgets</h2>
      <ul className="budget-list">
        {CATEGORIES.map((category) => (
          <CategoryBudgetRow
            key={category}
            category={category}
            budget={budgets[category] ?? 0}
            onChangeBudget={onChangeBudget}
          />
        ))}
      </ul>
    </section>
  )
}

export default CategoryBudgets
