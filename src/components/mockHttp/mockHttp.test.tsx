import { render, screen } from "@testing-library/react";
import MockHttp from "./index";
import { server } from "mock";
import { rest } from "msw";
describe("mockHttp", () => {
  test("when success", async () => {
    render(<MockHttp />);

    const listUserDiv = await screen.findAllByRole("listitem", undefined, {
      timeout: 1000,
    });
    expect(listUserDiv).toHaveLength(4);
  });

  test("when error", async () => {
    render(<MockHttp />);

    server.use(
      rest.get("http://jsonplaceholder.typicode.com/users", (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    const errMessage = await screen.findByText("err", undefined, {
      timeout: 1000,
    });

    expect(errMessage).toBeInTheDocument();
  });
});
