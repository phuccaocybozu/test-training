import { render, screen } from "@testing-library/react";
import OtherGetMethod from ".";

describe("Get By Placeholder text", () => {
  render(<OtherGetMethod />);

  test("Get input by place holder text", () => {
    const input1 = screen.getByPlaceholderText("Helloo ae nha");
    expect(input1).toBeInTheDocument();
  });
});
