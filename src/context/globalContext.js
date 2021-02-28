import { createContext, useReducer } from "react";
import { reducer } from "./globalReducer";

const initialState = [
];

export const transactionContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(reducer, initialState);

  const balance = transactions.reduce(
    (acc, curVal) => (curVal.type === "expense" ? acc - curVal.amount : acc + curVal.amount),
    0
  );
  console.log(transactions);

  const addTransaction = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };

  return (
    <transactionContext.Provider value={{ transactions, addTransaction , balance}}>
      {children}
    </transactionContext.Provider>
  );
};
