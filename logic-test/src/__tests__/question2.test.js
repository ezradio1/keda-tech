const maxSubarraySum = require('../question2');

describe('maxSubarraySum', () => {
  it('should returns the correct sum for a valid input array and subarray size', () => {
    expect(maxSubarraySum([100, 200, 300, 400], 2)).toEqual(700);
    expect(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)).toEqual(39);
    expect(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)).toEqual(5);
  });

  it('should returns null if subarray size is greater than input array length', () => {
    expect(maxSubarraySum([1, 2, 3], 4)).toBeNull();
  });

  it('should returns null if input array is empty', () => {
    expect(maxSubarraySum([], 2)).toBeNull();
  });

  it('should returns the correct sum for subarray size of 1', () => {
    expect(maxSubarraySum([1, 2, 3], 1)).toEqual(3);
  });

  it('should returns the correct sum for an input array with all negative numbers', () => {
    expect(maxSubarraySum([-1, -2, -3, -4], 2)).toEqual(-3);
  });
});
