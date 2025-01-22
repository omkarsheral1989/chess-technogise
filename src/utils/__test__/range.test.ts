import {range} from "../range";

describe("range()", () => {
  it.each([
    {start: 1, end: 5, expected: [1, 2, 3, 4, 5]},
    {start: 2, end: 4, expected: [2, 3, 4]},
    {start: 0, end: 0, expected: [0]},
    {start: 1, end: 0, expected: []},
  ])(
    "should return an array of numbers from start to end",
    ({start, end, expected}) => {
      expect(range(start, end)).toEqual(expected);
    },
  );
});
