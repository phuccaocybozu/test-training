import React from "react";
import TestAppProvider from "./TestAppProvider";
import App from "./App";

function TestProvider() {
  return (
    <TestAppProvider>
      <App />
    </TestAppProvider>
  );
}

export default TestProvider;
