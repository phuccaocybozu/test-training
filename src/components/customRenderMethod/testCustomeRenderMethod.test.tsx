import { render, screen } from "./util-custom-render";
import user from "@testing-library/user-event";
import App from "./App";
import TestAppProvider from "./TestAppProvider";
import TestProvider from ".";

describe("Test Provider", () => {
  //Khi có Provider thì phải đưa nó vào wrapper
  test("Have Wrapper", () => {
    render(<App />);
    screen.getByText("abc");
  });

  test("Click button", async () => {
    user.setup();
    render(<App />);
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
