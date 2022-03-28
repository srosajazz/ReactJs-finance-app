import {createContext, useEffect, useState,  ReactNode } from 'react';
import { api } from './services/api';

interface Transaction{
  id : number;
  title : string;
  amount : number;
  type : string;
  category : string;
  createdAt : string;
}


// 1.

// interface TransactionInput{
//   title : string;
//   amount : number;
//   type : string;
//   category : string;
  
// }
// 2.
type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

//3.
// type TransactionInput = Pick<Transaction, 'title' | 'amount' | 'type' | 'category'>;

interface TransactionsProviderProps{
  children : ReactNode;
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => void;
}


export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData,
);


export function TransactionProvider({children}: TransactionsProviderProps){
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('transactions/')
    .then(response => setTransactions(response.data.transactions));
  },[]);

  function createTransaction(transactions: TransactionInput){
    api.post('/transactions', transactions)
  }


  return (
    <TransactionsContext.Provider value={{transactions, createTransaction}}>
      {children}
    </TransactionsContext.Provider>
  );

}