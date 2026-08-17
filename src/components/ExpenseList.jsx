function formatCurrency(amount) {
  return amount.toLocaleString(undefined, {
    style: 'currency',
    currency: 'USD',
  })
}

function ExpenseList({ expenses, onDeleteExpense }) {
  if (expenses.length === 0) {
    return <p className="empty-state">No expenses yet. Add one above.</p>
  }

  return (
    <ul className="expense-list">
      {expenses.map((expense) => (
        <li key={expense.id} className="expense-row">
          <div className="expense-info">
            <span className="expense-description">{expense.description}</span>
            <span className="expense-category">{expense.category}</span>
          </div>
          <span className="expense-amount">{formatCurrency(expense.amount)}</span>
          <button
            type="button"
            className="delete-button"
            onClick={() => onDeleteExpense(expense.id)}
            aria-label={`Delete ${expense.description}`}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  )
}

export default ExpenseList
