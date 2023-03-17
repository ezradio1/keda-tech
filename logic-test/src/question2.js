const maxSubarraySum = (arr, num) => {
    // handle edge cases
    if (num > arr.length) {
      return null;
    }
  
    let maxSum = 0;
    let tempSum = 0;
  
    // calculate the initial sum of the first subarray
    for (let i = 0; i < num; i++) {
      maxSum += arr[i];
    }
  
    tempSum = maxSum;
  
    // slide the window and calculate the maximum sum
    for (let i = num; i < arr.length; i++) {
      tempSum = tempSum - arr[i - num] + arr[i];
      maxSum = Math.max(maxSum, tempSum);
    }
  
    return maxSum;
  }

  console.log(maxSubarraySum([100, 200, 300, 400], 2));
  console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
  console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2));

module.exports = maxSubarraySum
