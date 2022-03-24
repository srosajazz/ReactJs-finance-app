import { useEffect, useState } from 'react';
import {Container} from './styles';
import { api } from '../../services/api';


interface Transaction{
  id : number;
  title : string;
  amount : number;
  type : string;
  category : string;
  createdAt : string;
}


export function TransactionsTable(){
const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('transactions/')
    .then(response => setTransactions(response.data.transactions));
  },[]);
  
  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {
            transactions.map(transaction => (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {
                  new Intl.NumberFormat('en-US', {
                    style: 'currency', currency: 'USD', currencyDisplay: 'narrowSymbol'}).format(transaction.amount)}
                </td>
                <td>{transaction.category}</td>
                <td>
                  {new Intl.DateTimeFormat('us-US').format(
                    new Date(transaction.createdAt)
                  )}
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </Container>
  )
}


// new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', currencyDisplay: 'narrowSymbol'}).format(amount));