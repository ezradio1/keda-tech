const manualSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  
  return arr;
}

const arr = [1, 2, 4, 3, 5, 3, 2, 1]	
console.log(manualSort(arr)) // [5, 4, 3, 3, 2, 2, 1, 1]

module.exports = manualSort