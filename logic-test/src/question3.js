const countEvenNumbers = (obj) => {
  let count = 0;
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      count += countEvenNumbers(obj[key]);
    } else if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
      count += obj[key];
    }
  }
  return count;
};

const input1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

const input2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 4 }, ee: "car" },
};

console.log(countEvenNumbers(input1)); // 6
console.log(countEvenNumbers(input2)); // 12

module.exports = countEvenNumbers

