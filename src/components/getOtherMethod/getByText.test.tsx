import { fireEvent, render, screen } from "@testing-library/react";
import OtherGetMethod from ".";
import * as http from "../../apis/http.api";

describe("Get By Text", () => {
  render(<OtherGetMethod />);

  test("Submit", () => {
    const submitBtn = screen.getByText("Submit");

    const apiSpy = jest.spyOn(http, "httpApi");

    apiSpy.mockResolvedValue({ data: "hello" });
    // fireEvent.click(submitBtn);
  });
});
