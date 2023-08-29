import { act, renderHook } from "@testing-library/react";
import useCustom from "./useCustom";

describe("useCustom", () => {
  test("custom hook", () => {
    const { result } = renderHook(useCustom);
    expect(result.current.count).toBe(0);
  });

  test("initial value", () => {
    const { result } = renderHook(useCustom, {
      initialProps: 10,
    });

    expect(result.current.count).toBe(10);
  });

  test("increment", () => {
    const { result } = renderHook(useCustom, {
      initialProps: 10,
    });

    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(11);
  });

  test("decrement", () => {
    const { result } = renderHook(useCustom, {
      initialProps: 10,
    });

    act(() => {
      result.current.decrement();
    });
    expect(result.current.count).toBe(9);
  });
});
