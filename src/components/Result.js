import React from "react";

const Result = ({ values }) => {
  const { amount, after, rate, additional } = values;

  let startingPrincipal = Number(amount);
  let startBalance = Number(startingPrincipal);

  const rows = [];

  for (let year = 1; year <= after; year++) {
    const interest = (startBalance * rate) / 100;
    const endPrincipal = Number(startingPrincipal) + Number(additional);
    const endBalance = startBalance + interest;

    rows.push(
      <tr key={year}>
        <td>{year}</td>
        <td>{startingPrincipal.toFixed(2)}</td>
        <td>{startBalance.toFixed(2)}</td>
        <td>{interest.toFixed(2)}</td>
        <td>{endBalance.toFixed(2)}</td>
        <td>{endPrincipal.toFixed(2)}</td>
      </tr>
    );

    startingPrincipal = endPrincipal;
    startBalance = endBalance;
  }

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>Year</th>
            <th>Starting Principal</th>
            <th>Start Balance</th>
            <th>Interest</th>
            <th>End Balance</th>
            <th>End Principal</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default Result;
