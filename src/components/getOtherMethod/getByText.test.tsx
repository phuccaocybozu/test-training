import { fireEvent, render, screen } from "@testing-library/react";
import OtherGetMethod from ".";
import { httpApi } from "../../apis/http.api";
import * as http from "../../apis/http.api";

jest.mock("../../apis/http.api");

describe("Get By Text", () => {
  test("Submit", () => {
    render(<OtherGetMethod />);
    const submitBtn = screen.getByText("Submit");
    const form = screen.getByTitle("Form");
    const apiSpy = jest.spyOn(http, "httpApi");

    //Để không gây ra lỗi chưa implement function submit của form
    form.addEventListener("submit", (e) => {
      e.preventDefault();
    });

    httpApi.mockResolvedValue();
    fireEvent.click(submitBtn);

    expect(apiSpy).toHaveBeenCalled();
    expect(apiSpy).toBeCalledTimes(1);
  });
});
