import React, { useEffect, useState } from "react";

function MockHttp() {
  const [listUser, setListUser] = useState<[]>();
  const [error, setError] = useState<string>();
  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => setListUser(res))
      .catch(() => setError("err"));
  }, []);
  return error ? (
    <div>{error}</div>
  ) : (
    <ul>
      {listUser?.map((user: any, index) => (
        <li className="user-div" key={index}>
          {user.name}
        </li>
      ))}
    </ul>
  );
}

export default MockHttp;
