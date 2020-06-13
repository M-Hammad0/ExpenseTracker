import React from "react";

export default function Transaction(props) {
      const sign = props.trans.amount > 0 ? '+' : '-';
  return (
      <li className={props.trans.amount > 0 ? "plus": "minus"}>
      {props.trans.text} <span>{sign}{Math.abs(props.trans.amount)}</span>
      <button className="delete-btn">x</button>
    </li>
  );
}
