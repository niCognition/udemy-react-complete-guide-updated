import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (prop) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const changeYearHandler = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenses = prop.prop.filter((el) => {
    return el.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <div>
        <ExpensesFilter
          selected={filteredYear}
          onChangeDate={changeYearHandler}
        />
      </div>
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
