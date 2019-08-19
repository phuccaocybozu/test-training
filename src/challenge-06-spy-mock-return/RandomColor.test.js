import RandomColor from "./RandomColor";
import * as helper from "./helper";

describe('newColor()', () => {
  it('should return a color', () => {
    // TODO: implement test
    jest.spyOn(helper, 'getRandomInt').mockReturnValue(0);
    const randomColor = new RandomColor();

    const color = randomColor.newColor();

    expect(color).toBe('red');
  });
});

describe('when calling "newColor()" multiple times', () => {
  it('should return different colors', () => {
    // TODO: implement test
    jest.spyOn(helper, 'getRandomInt').mockReturnValueOnce(0).mockReturnValueOnce(1).mockReturnValueOnce(2);

    const randomColor = new RandomColor();
    const color1 = randomColor.newColor();
    const color2 = randomColor.newColor();
    const color3 = randomColor.newColor();

    expect(randomColor.generatedColors).toEqual(['blue'])
  });
});
