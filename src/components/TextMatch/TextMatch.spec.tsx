import { render, screen } from "@testing-library/react";
import TextMatch from "./TextMatch";

describe("Text Match test", () => {
  test("example", () => {
    render(<TextMatch />);

    //  Có thể sử dụng callback để lọc
    screen.getByText((content) => {
      return content.startsWith("Te");
    });

    screen.getByText("extM", {
      exact: false,
    });
  });
});
