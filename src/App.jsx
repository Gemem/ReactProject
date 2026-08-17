import { useState } from 'react'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'
import ExpenseSummary from './components/ExpenseSummary'
import './App.css'

function App() {
  const [expenses, setExpenses] = useState([])

  function handleAddExpense(expense) {
    setExpenses((current) => [expense, ...current])
  }

  function handleDeleteExpense(id) {
    setExpenses((current) => current.filter((expense) => expense.id !== id))
  }

  return (
    <main className="app">
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpense={handleAddExpense} />
      <ExpenseSummary expenses={expenses} />
      <ExpenseList expenses={expenses} onDeleteExpense={handleDeleteExpense} />
    </main>
  )
}

export default App
