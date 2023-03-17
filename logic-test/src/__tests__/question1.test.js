
const manualSort = require('../question1');

describe('manualSort', () => {
    it('should sorts an array in descending order', () => {
      const arr = [1, 2, 4, 3, 5, 3, 2, 1];
      const sortedArr = manualSort(arr);
      expect(sortedArr).toEqual([5, 4, 3, 3, 2, 2, 1, 1]);
    });
  
    it('should returns an empty array when passed an empty array', () => {
      const arr = [];
      const sortedArr = manualSort(arr);
      expect(sortedArr).toEqual([]);
    });
  
    it('should sorts an array with negative numbers', () => {
      const arr = [-2, 3, 1, 0, -1];
      const sortedArr = manualSort(arr);
      expect(sortedArr).toEqual([3, 1, 0, -1, -2]);
    });
  
    it('should returns the same array when passed a one-element array', () => {
      const arr = [1];
      const sortedArr = manualSort(arr);
      expect(sortedArr).toEqual([1]);
    });
  
    it('should returns the same array when passed a sorted array', () => {
      const arr = [5, 4, 3, 3, 2, 2, 1, 1];
      const sortedArr = manualSort(arr);
      expect(sortedArr).toEqual([5, 4, 3, 3, 2, 2, 1, 1]);
    });
  });
  