function formatCurrency(amount) {
  return amount.toLocaleString(undefined, {
    style: 'currency',
    currency: 'USD',
  })
}

function ExpenseSummary({ expenses }) {
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0)

  return (
    <div className="expense-summary">
      <span>Total spent</span>
      <strong aria-live="polite">{formatCurrency(total)}</strong>
    </div>
  )
}

export default ExpenseSummary
