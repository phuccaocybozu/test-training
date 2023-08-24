import { fireEvent, render, screen } from "@testing-library/react";
import GetByRole from "./getByRole";
import userEvent from "@testing-library/user-event";

describe("GetByRole", () => {
  test("Get by role here", () => {
    render(<GetByRole />);
    //Heading là các thẻ có thể là h1, h2,...

    // ta lấy ra thẻ heading có phần content bên trong là Heading 1
    const heading1 = screen.getByRole("heading", {
      name: "Heading 1",
    });
    expect(heading1).toBeInTheDocument();

    // ta lấy ra thẻ heading có phần content bên trong lad Heading 2
    const heading2 = screen.getByRole("heading", {
      name: "Heading 2",
    });
    expect(heading2).toBeInTheDocument();
  });

  test("Change value", () => {
    render(<GetByRole />);

    //username input
    const username = screen.getByRole("textbox", {
      name: "Username",
    });

    fireEvent.change(username, {
      target: {
        value: "caoluongphuc",
      },
    });

    expect(username).toHaveValue("caoluongphuc");

    //topic select
    const topic = screen.getByRole("combobox") as HTMLSelectElement;

    fireEvent.change(topic, {
      target: {
        value: "vue",
      },
    });

    expect(screen.getByText("vue")).toBeInTheDocument();
  });

  test("GetByLabelText by  level option", () => {
    render(<GetByRole />);
    const heading2 = screen.getByRole("heading", {
      level: 2,
    });

    expect(heading2).toBeInTheDocument();
  });
});
