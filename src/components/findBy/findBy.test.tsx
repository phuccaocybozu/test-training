import { render, screen } from "@testing-library/react";
import FindBy from ".";

describe("Find By Test", () => {
  test("Example", async () => {
    render(<FindBy />);
    /**
     * const subject = screen.getByText("ReactJS");
     * expect(subject).toBeInTheDocument();
     *
     * Nếu ta sử dụng theo cách này thì sẽ gây ra lỗi bởi vì sau 1s thì ReactJS mới xuất hiện.
     * Vì vậy ta sử dụng findBy() để có thể tìm thấy ReaxtJs sau khoảng thời gian (t) mặc định là 1000ms
     */
    const subject = await screen.findByText("ReactJS", undefined, {
      timeout: 2000,
    });
    expect(subject).toBeInTheDocument();
  });
});
