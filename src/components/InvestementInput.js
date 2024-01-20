import React from "react";

const InvestementInput = ({ onChange, values, onSubmit }) => {
  let { amount, after, rate, Additional } = values;

  return (
    <form onSubmit={onSubmit}>
      <ul>
        <li>
          <label>Starting Amount</label>
          <input
            type="number"
            placeholder="Starting amount"
            value={amount}
            onChange={(e) => {
              onChange({ ...values, amount: e.target.value });
            }}
          />
        </li>
        <li>
          <label>After</label>
          <input
            type="number"
            placeholder="After years"
            value={after}
            onChange={(e) => {
              onChange({ ...values, after: e.target.value });
            }}
          />
        </li>
        <li>
          <label>Return Rate</label>
          <input
            type="number"
            placeholder="Interest Rate"
            value={rate}
            onChange={(e) => {
              onChange({ ...values, rate: e.target.value });
            }}
          />
        </li>
        <li>
          <label>Additional Contribution</label>
          <input
            type="number"
            placeholder="Additional Contribution"
            value={Additional}
            onChange={(e) => {
              onChange({ ...values, Additional: e.target.value });
            }}
          />
        </li>
      </ul>

      <button type="submit">Calculate</button>
    </form>
  );
};

export default InvestementInput;
