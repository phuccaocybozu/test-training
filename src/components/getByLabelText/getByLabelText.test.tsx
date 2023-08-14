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

    // ở đây ta có thể thấy rằng có 2 label có name là topic cho nên là phải định nghĩa thêm option để có thể lấy chính xác được label mong muốn

    const topic = screen.getByLabelText("Topic", {
      // sử dụng option selector để mong muốn label cho thẻ nào?
      selector: "select",
    }) as HTMLSelectElement;

    const option1 = screen.getByRole("option", {
      name: "React",
    });

    userEvent.selectOptions(topic, option1);
    expect(topic.value).toBe("react");

    const topic1 = screen.getByLabelText("Topic", {
      selector: "input",
    });

    expect(topic1).toHaveClass("topic-class");
  });
});
