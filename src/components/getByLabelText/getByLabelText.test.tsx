import { fireEvent, render, screen } from "@testing-library/react";
import GetByLabelText from "./getByLabelText";
import userEvent from "@testing-library/user-event";

describe("GetByLabelText by  name option", () => {
  test("Change value", () => {
    render(<GetByLabelText />);

    //username input
    const username = screen.getByLabelText("Username");

    fireEvent.change(username, {
      target: {
        value: "caoluongphuc",
      },
    });

    expect(username).toHaveValue("caoluongphuc");

    //topic select
    const topic = screen.getByLabelText("Topic") as HTMLSelectElement;
    const option1 = screen.getByRole("option", {
      name: "React",
    });

    userEvent.selectOptions(topic, option1);
    expect(topic.value).toBe("react");
  });
});
