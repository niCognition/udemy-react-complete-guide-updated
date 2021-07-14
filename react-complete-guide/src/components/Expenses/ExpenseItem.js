import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [titleState, setTitleState] = useState(props.title);

  const clickHandler = () => {
    setTitleState("Updated!");
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{titleState}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change title</button>
      </Card>
    </li>
  );
};

export default ExpenseItem;
