import { render } from "@testing-library/react";
import SnapShot from ".";

describe("snapshot", () => {
  test("case 1", () => {
    const { container } = render(
      <SnapShot>This is content of Snapshot component 1</SnapShot>
    );

    expect(container).toMatchSnapshot();
  });

  test("case 2", () => {
    const { container } = render(
      <SnapShot>This is content of Snapshot component 2</SnapShot>
    );

    expect(container).toMatchSnapshot();
  });
});
