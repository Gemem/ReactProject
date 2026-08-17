import { useState } from 'react'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'
import ExpenseSummary from './components/ExpenseSummary'
import CategoryBudgets from './components/CategoryBudgets'
import './App.css'

function App() {
  const [expenses, setExpenses] = useState([])
  const [budgets, setBudgets] = useState({})

  function handleAddExpense(expense) {
    setExpenses((current) => [expense, ...current])
  }

  function handleDeleteExpense(id) {
    setExpenses((current) => current.filter((expense) => expense.id !== id))
  }

  function handleChangeBudget(category, rawValue) {
    const parsed = Number(rawValue)
    setBudgets((current) => ({
      ...current,
      [category]: Number.isNaN(parsed) || parsed < 0 ? 0 : parsed,
    }))
  }

  return (
    <main className="app">
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpense={handleAddExpense} />
      <ExpenseSummary expenses={expenses} />
      <CategoryBudgets
        expenses={expenses}
        budgets={budgets}
        onChangeBudget={handleChangeBudget}
      />
      <ExpenseList expenses={expenses} onDeleteExpense={handleDeleteExpense} />
    </main>
  )
}

export default App
