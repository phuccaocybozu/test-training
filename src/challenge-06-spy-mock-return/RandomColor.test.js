import RandomColor from "./RandomColor";
import * as helper from "./helper";

//sau khi sử dụng mockRestore thì sẽ bỏ ko mock nữa, cho dù các testcase dưới có sử dụng mockReturnValue như nào đi nữa cũng ko có tác dụng gì .
//sau khi sử dụng mockReset thì sẽ reset implement của hàm mock trả về undefined, nhưng sau đso vẫn mockReturnValue được.
describe('newColor()', () => {
  it('should return a color', () => {
    // TODO: implement test
    const mockGetRandomInt = jest.spyOn(helper, 'getRandomInt');
    mockGetRandomInt.mockReturnValue(0);
    const randomColor = new RandomColor();

    const color = randomColor.newColor();

    expect(color).toBe('red');
  });
});

describe('when calling "newColor()" multiple times', () => {
  it('should return different colors', () => {
    // TODO: implement test
    const mockGetRandomInt = jest.spyOn(helper, 'getRandomInt');
    mockGetRandomInt.mockReturnValueOnce(0);

    const randomColor = new RandomColor();
    randomColor.newColor();
    mockGetRandomInt.mockRestore();
    mockGetRandomInt.mockReturnValueOnce("abc");
    //ko có tác dụng vẫn ra số random như thường. Ko còn mock return được nữa
    console.log(helper.getRandomInt());
    const color2 = randomColor.newColor();

    expect(color2).not.toBe('red')
  });

  it('should return undefinded when use mockReset', ()=>{
    const mockGetRandomInt = jest.spyOn(helper, 'getRandomInt');
    const randomColor = new RandomColor();
    mockGetRandomInt.mockReset();
    //Vẫn mock return được
    mockGetRandomInt.mockReturnValueOnce(1);
    console.log(helper.getRandomInt());
    const color = randomColor.newColor();

    expect(color).toBe(undefined)
  })

  it('', ()=>{
    const mockGetRandomInt = jest.spyOn(helper, 'getRandomInt');
    const randomColor = new RandomColor();
    mockGetRandomInt.mockClear();
    mockGetRandomInt.mockImplementation(()=>{
      console.log("hahah")
      return 1;
    })
    randomColor.newColor();
  })
});

