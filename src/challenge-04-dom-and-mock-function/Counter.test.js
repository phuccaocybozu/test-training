import { Counter } from "./Counter";

let container;
let onChange;
let counter;
beforeEach(() => {
  // TODO: setup the document body for rendering the `Counter`
  // Set up DOM
  container = document.createElement("div");
  document.body.appendChild(container);

  // Set up mock onChange function
  onChange = jest.fn();

  // Initialize counter
  counter = new Counter({value:1 ,selector: "div", onChange });
  counter.render();
});

describe("Counter", () => {
  it("should render the given value", () => {
    // TODO: implement test
    expect(counter.value).toBe(1);
  });

  it("onChange", ()=>{
      counter._handleChangeValue("increase");
      expect(onChange).toHaveBeenCalled();
      expect(onChange).toHaveBeenCalledWith(2);
      counter._handleChangeValue("decrease");
      expect(onChange).toHaveBeenCalledWith(1);
  })

  describe('when clicking the "▲" arrow button', () => {
    it("should increase the value from 1 to 2", () => {
      // TODO: implement test
      expect(counter.value).toBe(1);
      counter._handleChangeValue("increase");
      expect(counter.value).toBe(2);
    });
  });

  describe('when clicking the "▼" arrow button', () => {
    it("should decrease the value from 3 to 2", () => {
      // TODO: implement test
      counter._handleChangeValue("increase");
      counter._handleChangeValue("increase");
      expect(counter.value).toBe(3);
      counter._handleChangeValue("decrease");
      expect(counter.value).toBe(2);
    });
  });
});
