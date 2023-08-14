import React from "react";

type GreetProps = {
  name?: string;
};

function Greet({ name }: GreetProps) {
  return <button>{`Hello ${name || "hello"}`}</button>;
}

export default Greet;
