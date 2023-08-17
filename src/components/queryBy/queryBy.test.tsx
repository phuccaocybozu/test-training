// Sự khác nhau giữa getBy và queryBy

import { fireEvent, render, screen } from "@testing-library/react";
import QueryBy from ".";

// => Nếu như không có phần tử đó tồn tại, getBy sẽ throw ra lỗi. Còn nếu queryBy không có phần tử thì sẽ trả về null
describe("Query by", () => {
  test("example", () => {
    render(<QueryBy />);

    //Sẽ gây ra lỗi
    // const btn = screen.getByText("Logout");

    const btnLogin = screen.getByText("Login");

    fireEvent.click(btnLogin);
    const btnLogout = screen.getByText("Logout");

    expect(btnLogout).toBeInTheDocument();

    fireEvent.click(btnLogout);

    expect(screen.getByText("Login")).toBeInTheDocument();
  });
});
