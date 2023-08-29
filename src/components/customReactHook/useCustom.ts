import { useState } from "react";

function useCustom(value: number = 0) {
  const [count, setCount] = useState(value);
  const increment = () => setCount((count)=>count + 1);
  const decrement = () => setCount((count)=>count - 1);
  return {
    count,
    increment,
    decrement,
  };
}

export default useCustom