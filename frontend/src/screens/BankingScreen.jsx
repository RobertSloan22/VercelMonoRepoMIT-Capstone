import { useDepositMutation, useWithdrawMutation } from '../app/services/auth/authService'


const BankingScreen = () => {
function DepositForm() {
  const [amount, setAmount] = useState(0)
  const [deposit, { isLoading, isError, error }] = useDepositMutation()

  const handleSubmit = (e) => {
    e.preventDefault()
    deposit(amount)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <button type="submit" disabled={isLoading}>
        Deposit
      </button>
      {isError && <div>{error.message}</div>}
    </form>
  )
}

function WithdrawForm() {
  const [amount, setAmount] = useState(0)
  const [withdraw, { isLoading, isError, error }] = useWithdrawMutation()

  const handleSubmit = (e) => {
    e.preventDefault()
    withdraw(amount)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <button type="submit" disabled={isLoading}>
        Withdraw
      </button>
      {isError && <div>{error.message}</div>}
    </form>
  )
}
}
export default BankingScreen