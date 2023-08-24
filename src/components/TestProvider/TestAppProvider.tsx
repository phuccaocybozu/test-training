import React, { ReactNode, createContext, useState } from "react";

type TestAppProviderProp = {
  children: ReactNode;
};

type AppContextType = {
  value: string;
  changeValue: (e: string) => void;
};

const initialValue: AppContextType = {
  value: "",
  changeValue: (e: string) => {},
};

export const testAppContext = createContext<AppContextType>(initialValue);

function TestAppProvider({ children }: TestAppProviderProp) {
  const [value, setValue] = useState("abc");
  const changeValue = (e: string) => {
    setValue(e);
  };
  const valueProps = {
    value,
    changeValue,
  };
  return (
    <testAppContext.Provider value={valueProps}>
      {children}
    </testAppContext.Provider>
  );
}

export default TestAppProvider;
