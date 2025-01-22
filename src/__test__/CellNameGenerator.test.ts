import {CellNameGenerator} from "../CellNameGenerator";

describe("CellNameGenerator", () => {

  describe("getCellNameFromCoordinates()", () => {

    it.each([
      {row: 0, column: 0, name: "A1"},
      {row: 4, column: 4, name: "E5"},
      {row: 7, column: 7, name: "H8"},
    ])(
      "should return cell name for given row and column",
      ({row, column, name}) => {
        const cellNameGenerator = new CellNameGenerator();

        const result = cellNameGenerator.getCellNameFromCoordinates(row, column);

        expect(result).toBe(name);
      },
    );
  });
});
