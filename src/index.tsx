import React from 'react';
import ReactDOM from 'react-dom';
import { createServer} from 'miragejs';
import {App} from './App';

// https://miragejs.com/
createServer({
  routes(){
    this.namespace = 'api';
    this.get('/transactions', () =>{
      return [
        {
          id: 1,
          title: 'Transactions',
          amount: 500,
          type: 'deposit',
          category: 'Food',
          createdAt: new Date()
        }
      ]
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


