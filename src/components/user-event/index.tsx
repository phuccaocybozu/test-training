import React, { useState } from "react";

function UserEvent() {
  const [value, setValue] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  const handleIncrease = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(e.target.value));
  };

  const handleSet = () => {
    setCount(value);
  };
  return (
    <>
      <h4>{count}</h4>
      <button onClick={handleIncrease}>Increase</button>
      <input type="number" value={value} onChange={changeValue} />
      <button onClick={handleSet}>Set</button>

      <input type="text" />
    </>
  );
}

export default UserEvent;
