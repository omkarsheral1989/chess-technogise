import {Cell} from "../Cell";

describe("Cell class", () => {
  describe("constructor()", () => {
    it("should initialize row, column and name", () => {
      const row = 1;
      const column = 2;
      const name = "B1";

      const cell = new Cell(row, column, name);

      expect(cell.getRow()).toBe(row);
      expect(cell.getColumn()).toBe(column);
      expect(cell.getName()).toBe(name);
    });
  });
});
