import { render, screen } from "@testing-library/react";
import Greet from "./getByText";

describe("test 1: render name in children of Greet", () => {
  test("1.1: name is null", () => {
    render(<Greet />);

    expect(screen.getByText("Hello hello")).toBeInTheDocument();
  });

  test("1.2: name is phuc", () => {
    render(<Greet name="Phuc" />);

    expect(screen.getByText("Hello Phuc")).toBeInTheDocument();
  });
});
