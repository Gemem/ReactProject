import { useId, useState } from 'react'
import { CATEGORIES } from '../categories'

function ExpenseForm({ onAddExpense }) {
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState(CATEGORIES[0])
  const [error, setError] = useState('')

  const descriptionId = useId()
  const amountId = useId()
  const categoryId = useId()

  function handleSubmit(event) {
    event.preventDefault()

    const trimmedDescription = description.trim()
    const parsedAmount = Number(amount)

    if (!trimmedDescription) {
      setError('Enter a description for the expense.')
      return
    }

    if (!amount || Number.isNaN(parsedAmount) || parsedAmount <= 0) {
      setError('Enter an amount greater than zero.')
      return
    }

    onAddExpense({
      id: crypto.randomUUID(),
      description: trimmedDescription,
      amount: parsedAmount,
      category,
      date: new Date().toISOString(),
    })

    setDescription('')
    setAmount('')
    setCategory(CATEGORIES[0])
    setError('')
  }

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor={descriptionId}>Description</label>
        <input
          id={descriptionId}
          type="text"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Coffee"
        />
      </div>

      <div className="field">
        <label htmlFor={amountId}>Amount</label>
        <input
          id={amountId}
          type="number"
          min="0"
          step="0.01"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
          placeholder="0.00"
        />
      </div>

      <div className="field">
        <label htmlFor={categoryId}>Category</label>
        <select
          id={categoryId}
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          {CATEGORIES.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {error && (
        <p className="form-error" role="alert">
          {error}
        </p>
      )}

      <button type="submit">Add expense</button>
    </form>
  )
}

export default ExpenseForm
