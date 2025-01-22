import {Board} from "../Board";
import {CellNameGenerator} from "../CellNameGenerator";

describe("Board class", () => {

  describe("constructor()", () => {

    it.each([
      {row: 0, column: 0, name: "A1"},
      {row: 4, column: 4, name: "E5"},
      {row: 7, column: 7, name: "H8"},
    ])
    (
      "should initialize cells with row, column and name",
      ({row, column, name}) => {
        const board = new Board(new CellNameGenerator());

        const cell = board.getCellAtCoordinates(row, column)!;

        expect(cell.getRow()).toBe(row);
        expect(cell.getColumn()).toBe(column);
        expect(cell.getName()).toBe(name);
      },
    );
  });

  describe("getCellAtCoordinates()", () => {

    it.each([
      {row: 0, column: 0, name: "A1"},
      {row: 4, column: 4, name: "E5"},
      {row: 7, column: 7, name: "H8"},
    ])
    (
      "should return the cell at given coordinates",
      ({row, column, name}) => {
        const board = new Board(new CellNameGenerator());

        const cell = board.getCellAtCoordinates(row, column);

        expect(cell?.getName()).toBe(name);
      },
    );

    it.each([
      {row: -1, column: -1},
      {row: -1, column: 6},
      {row: 9, column: 6},
      {row: 9, column: 9},
    ])(
      "should not return the cell if coordinates are incorrect",
      ({row, column}) => {
        const board = new Board(new CellNameGenerator());

        const cell = board.getCellAtCoordinates(row, column);

        expect(cell).toBeUndefined();
      },
    );
  });

  describe("getCellByName()", () => {

    it.each(["A1", "E5", "H8"])("should return the cell with given name", (cellName) => {
      const board = new Board(new CellNameGenerator());

      const cell = board.getCellByName(cellName);

      expect(cell?.getName()).toBe(cellName);
    });

    it("should return 'undefined' if cell name is incorrect", () => {
      const board = new Board(new CellNameGenerator());

      const cell = board.getCellByName("Z9");

      expect(cell).toBeUndefined();
    });
  });
});
