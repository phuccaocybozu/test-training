import React from "react";

type MockFunctionProps = {
  increment: () => string;
  decrement: () => string;
  count: number;
};

function MockFunction({ increment, decrement, count }: MockFunctionProps) {
  return (
    <div>
      <button onClick={decrement}>-</button>
      <p>{count}</p>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default MockFunction;
