import React, { useEffect, useState } from "react";

function FindBy() {
  const [listSubject, setListSubject] = useState<string[]>([]);
  useEffect(() => {
    setTimeout(() => {
      setListSubject(["ReactJS", "NodeJS", "React Native"]);
    }, 1000);
  }, []);

  return listSubject.length > 0 ? (
    listSubject.map((item, index) => {
      return <div key={index}>{item}</div>;
    })
  ) : (
    <button>Login</button>
  );
}

export default FindBy;
