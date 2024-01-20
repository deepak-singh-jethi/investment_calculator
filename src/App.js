import React, { useState } from "react";
import InvestementInput from "./components/InvestementInput";
import Result from "./components/Result";

const initialValues = {
  amount: 0,
  after: 0,
  rate: 0,
  additional: 0,
};

const App = () => {
  const [inputs, setInputs] = useState(initialValues);

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <h1>D-Investment Calculator</h1>
      <InvestementInput
        values={inputs}
        onChange={setInputs}
        onSubmit={handleSubmit}
      />

      <div id="result_conatiner">
        <Result values={inputs} />
      </div>
    </>
  );
};

export default App;
