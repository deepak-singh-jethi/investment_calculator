import React from "react";

const InvestementInput = ({ onChange, values, onSubmit }) => {
  let { amount, after, rate, additional } = values;

  return (
    <form onSubmit={onSubmit}>
      <ul>
        <li>
          <label>Starting Amount:</label>
          <input
            type="number"
            placeholder="Starting amount"
            value={amount}
            onChange={(e) => {
              onChange({ ...values, amount: e.target.value });
            }}
            required
          />
        </li>
        <li>
          <label>After Years:</label>
          <input
            type="number"
            placeholder="Years"
            value={after}
            onChange={(e) => {
              onChange({ ...values, after: e.target.value });
            }}
            required
            max="50"
          />
        </li>
        <li>
          <label>Return Rate:</label>
          <input
            type="number"
            placeholder="Per Year"
            value={rate}
            onChange={(e) => {
              onChange({ ...values, rate: e.target.value });
            }}
            required
            max="50"
          />
        </li>
        <li>
          <label>Additional Contribution (per year):</label>
          <input
            type="number"
            placeholder="Per year"
            value={additional}
            onChange={(e) => {
              onChange({ ...values, additional: e.target.value });
            }}
            required
          />
        </li>
      </ul>
    </form>
  );
};

export default InvestementInput;
