import { fireEvent, render, screen } from "@testing-library/react";
import OtherGetMethod from ".";
import userEvent from "@testing-library/user-event";

describe("Get by display value", () => {
  test("Get display value of input", () => {
    render(<OtherGetMethod />);
    const input = screen.getByRole("textbox", {
      name: "Username",
    });

    fireEvent.change(input, {
      target: {
        value: "Hello everyone",
      },
    });

    const _input = screen.getByDisplayValue("Hello everyone");
    expect(_input).toBeInTheDocument();
  });

  test("Get display value of select", async () => {
    render(<OtherGetMethod />);
    const select = screen.getByRole("combobox") as HTMLSelectElement;

    await userEvent.selectOptions(select, "vue");

    expect(select).toHaveValue("vue");
  });
});
