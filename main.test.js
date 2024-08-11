// Imports functions from main.js
const { add, subtract, multiply, divide, square, max } = require("./main");

// Says what section of testing is being done.
describe("Testing math functions", () => {
  test("adds 5 + 6 to equal 11", () => {
    // Tests the add function with 5 + 6. 11 is the expected outcome.
    expect(add(5, 6)).toBe(11);
  });
  
  test("subtracts 11 - 6 to equal 5", () => {
    expect(subtract(11, 6)).toBe(5);
  });
  
  test("multiplies 5 * 4 to equal 20", () => {
    expect(multiply(5, 4)).toBe(20);
  });
  
  test("divides 20 / 4 to equal 5", () => {
    expect(divide(20, 4)).toBe(5);
  });
})

describe("Testing advanced math functions", () => {
  test("gets the square root of 64 to get 8", () => {
    expect(square(64)).toBe(8);
  });
  
  test("gets the max between 1 and 100 to get 100", () => {
    expect(max(1, 100)).toBe(100);
  });
})
