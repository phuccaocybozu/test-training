import React, { useState } from "react";

function QueryBy() {
  const [list, setList] = useState<string[]>([]);

  const loginHandle = () => {
    setList(["React", "CSS"]);
  };

  const logoutHandle = () => {
    setList([]);
  };
  return list.length ? (
    <>
      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={logoutHandle}>Logout</button>
    </>
  ) : (
    <button onClick={loginHandle}>Login</button>
  );
}

export default QueryBy;
