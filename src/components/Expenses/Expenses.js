import React, { useState } from "react";

import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const ExpenseTask = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");
  const selectedYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  let expensesContent = <p>No expenses found.</p>;
  if (filteredExpenses.length > 0)
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangedYear={selectedYearHandler}
        />
        {expensesContent}
      </Card>
    </div>
  );
};
export default ExpenseTask;
