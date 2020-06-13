import React from 'react'
import { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';

const Balance = () => {
      const {transactions} = useContext(GlobalContext)

      const amounts = transactions.map(t => (t.amount));
      const total = amounts.reduce((acc,item) => (acc += item), 0).toFixed(2);
      return (
            <div className="container">
                  <h4>Balance</h4>
                  <h1 id="balance">${total}</h1>
            </div>
      )
}

export default Balance;
