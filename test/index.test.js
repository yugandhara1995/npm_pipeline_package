var math = require("../src/index.js");
// import {example_function_add} from '../src/index.js'
test("sum of 3 and 3", () => {
  expect(math.example_function_add(3,3)).toBe(6);
});

test("diff of 3 and 3", () => {
  expect(math.example_function_sub(3,3)).toBe(0);
});