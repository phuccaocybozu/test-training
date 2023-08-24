import { fireEvent, render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "./App";
import TestAppProvider, { testAppContext } from "./TestAppProvider";
import TestProvider from ".";

describe("Test Provider", () => {
  //Khi có Provider thì phải đưa nó vào wrapper
  test("Have Wrapper", () => {
    render(<App />, {
      wrapper: TestAppProvider,
    });
    screen.getByText("abc");
  });

  test("Not Have Wrapper", async () => {
    user.setup();
    render(<App />);
    screen.getByText("Hello");
  });

  test("Click button", async () => {
    user.setup();
    render(<App />, {
      wrapper: TestAppProvider,
    });
    screen.getByText("abc");

    const btn = screen.getByText("Click me");
    await user.click(btn);

    expect(screen.getByText("hihi")).toBeInTheDocument();
  });

  test("index.tsx", () => {
    render(<TestProvider />);

    const button = screen.getByText("Click me");
    expect(button).toBeInTheDocument();
  });

  test("testAppProvider.tsx", () => {
    render(
      <TestAppProvider>
        <p>Helloo</p>
      </TestAppProvider>
    );

    expect(screen.getByText("Helloo")).toBeInTheDocument();
  });
});
