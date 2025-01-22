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

        const cell = board.getCellAtCoordinates(row, column);

        expect(cell.getRow()).toBe(row);
        expect(cell.getColumn()).toBe(column);
        expect(cell.getName()).toBe(name);
      },
    );
  });
});
