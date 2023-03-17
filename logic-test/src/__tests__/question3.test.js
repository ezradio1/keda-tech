const countEvenNumbers = require('../question3');

describe('countEvenNumbers', () => {
  it('should return 0 for an empty object', () => {
    const input = {};
    expect(countEvenNumbers(input)).toBe(0);
  });

  it('should return the sum of even numbers in a flat object', () => {
    const input = { a: 1, b: 2, c: 3, d: 4 };
    expect(countEvenNumbers(input)).toBe(6);
  });

  it('should return the sum of even numbers in a nested object', () => {
    const input = {
      a: 1,
      b: { b1: 2, b2: 3, b3: { b4: 4, b5: "foo" } },
      c: { c1: "bar", c2: 5 },
      d: 6,
    };
    expect(countEvenNumbers(input)).toBe(12);
  });

  it('should ignore non-number values in the object', () => {
    const input = {
      a: 1,
      b: { b1: 2, b2: "foo", b3: { b4: true, b5: 4 } },
      c: { c1: undefined, c2: null },
      d: 6,
    };
    expect(countEvenNumbers(input)).toBe(12);
  });

  it('should handle input objects with only odd numbers', () => {
    const input = {
      a: 1,
      b: { b1: 3, b2: 5, b3: { b4: 7, b5: 9 } },
      c: { c1: "foo", c2: "bar" },
      d: 11,
    };
    expect(countEvenNumbers(input)).toBe(0);
  });
});
