import {useContext} from 'react'
import {transactionContext} from './context/globalContext'

const useTransactions = (title) => {
    // resetCategories();
  const {transactions} = useContext(transactionContext)

  const rightTransaction = transactions.filter((t) => t.type === title)
  const total = rightTransaction.reduce((acc , curVal) =>( acc + curVal.amount),0)
  const category = rightTransaction.filter((t) => )

  return {total}


}

export default useTransactions