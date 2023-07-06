import "./ExpenseDetails.css";
import React from "react";

function ExpenseDetails(props) {
  return (
    <div className="expense-details">
      <h2 className="expense-details__title">{props.title}</h2>
      <div className="expense-details__location">{props.location}</div>
      <div className="expense-details__amount">${props.amount}</div>
    </div>
  );
}

export default ExpenseDetails;
