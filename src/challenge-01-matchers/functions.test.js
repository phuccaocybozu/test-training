import { arraySum, getPositiveNumbers } from "./functions";
describe('functions', () => {
  describe('arraySum', () => {
    it('should return 0 for an empty array', () => {
      // TODO: implement test
      expect(arraySum([])).toEqual(0)
    });

    it('should return the sum of all the values in the array', () => {
      // TODO: implement test
      expect(arraySum([1,2,3])).toEqual(6)
    });
  });

  describe('getPositiveNumbers', () => {
    it('should return positive numbers', () => {
      // TODO: implement test
      expect(getPositiveNumbers([1,2,3,-5])).toEqual([1,2,3])
    });

    it('should return empty array', () => {
      // TODO: implement test
      expect(getPositiveNumbers([-1,-2,-4])).toEqual([])
    });
  });
});
