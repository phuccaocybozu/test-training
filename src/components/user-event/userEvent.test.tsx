import { act, render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserEvent from ".";
describe("Test user event", () => {
  test("event click and type", async () => {
    user.setup();
    render(<UserEvent />);

    const input = screen.getByRole("spinbutton");
    await act(async () => {
      return await user.type(input, "10");
    });
    expect(input).toHaveValue(10);

    const btnSet = screen.getByText("Set");
    const headingDisplay = screen.getByRole("heading", {
      level: 4,
    });
    await user.click(btnSet);
    expect(headingDisplay).toHaveTextContent("10");

    const btnIncrease = screen.getByRole("button", {
      name: "Increase",
    });
    await user.dblClick(btnIncrease);
    expect(headingDisplay).toHaveTextContent("12");
  });

  test("event tab", async () => {
    user.setup();
    render(<UserEvent />);

    const input = screen.getByRole("spinbutton");
    await user.type(input, "10");
    await user.tab();

    const btnSet = screen.getByText(/set/i);
    expect(btnSet).toHaveFocus();
  });

  test("event keyboard", async () => {
    user.setup();
    render(<UserEvent />);

    const input = screen.getByRole("textbox");
    await user.click(input);

    //Nhấn giữ nút shift sau đó thả ra
    await user.keyboard("{Shift>}A{/Shift}");
    expect(input).toHaveValue("A");
  });
});
