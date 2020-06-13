import React,{useContext} from "react";
import { GlobalContext } from "../Context/GlobalState";

export default function Transaction(props) {
      const {deleteTransaction} = useContext(GlobalContext);
      const sign = props.trans.amount > 0 ? '+' : '-';
  return (
      <li className={props.trans.amount > 0 ? "plus": "minus"}>
      {props.trans.text} <span>{sign}{Math.abs(props.trans.amount)}</span>
      <button onClick={() => deleteTransaction(props.trans.id)} className="delete-btn">x</button>
    </li>
  );
}
