import React, { useState } from "react";
import InvestementInput from "./components/InvestementInput";

const initialValues = {
  amount: 0,
  after: 0,
  rate: 0,
  Additional: 0,
};

const App = () => {
  const [inputs, setInputs] = useState(initialValues);

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div>
      <InvestementInput
        values={inputs}
        onChange={setInputs}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default App;
