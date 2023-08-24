import { RenderOptions, render } from "@testing-library/react";
import { ReactElement } from "react";
import TestAppProvider from "./TestAppProvider";

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => {
  return render(ui, {
    wrapper: TestAppProvider,
    ...options,
  });
};

export * from "@testing-library/react";
export { customRender as render };
