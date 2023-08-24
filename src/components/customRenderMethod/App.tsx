import { useContext } from "react";
import { testAppContext } from "./TestAppProvider";

function App() {
  const { value, changeValue } = useContext(testAppContext);
  return (
    <>
      <p>{value.length > 0 ? value : "Hello"}</p>
      <button
        onClick={() => {
          changeValue("hihi");
        }}
      >
        Click me
      </button>
    </>
  );
}

export default App;
