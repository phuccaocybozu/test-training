import { render, screen } from "@testing-library/react";
import MockFunction from ".";
import userEvent from "@testing-library/user-event";

describe("mock function", () => {
  test("mockFunction", async () => {
    const incrementHandle = jest.fn();
    const decrementHandle = jest.fn();
    render(
      <MockFunction
        count={0}
        increment={incrementHandle}
        decrement={decrementHandle}
      />
    );

    const minusBtn = screen.getByText("-");
    const addBtn = screen.getByText("+");

    await userEvent.click(minusBtn);
    expect(decrementHandle).toHaveBeenCalledTimes(1);

    await userEvent.click(addBtn);
    expect(incrementHandle).toHaveBeenCalledTimes(1);
  });
});
