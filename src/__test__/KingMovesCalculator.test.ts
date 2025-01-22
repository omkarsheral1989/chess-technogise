import {Board} from "../Board";
import {CellNameGenerator} from "../CellNameGenerator";
import {KingMovesCalculator} from "../KingMovesCalculator";

describe("KingMovesCalculator class", () => {

  describe("getPossibleMoves()", () => {

    it.each([
      {cellName: "D5", expectedMoves: ["C4", "D4", "E4", "C5", "E5", "C6", "D6", "E6"]},
      {cellName: "D1", expectedMoves: ["C1", "E1", "C2", "D2", "E2"]},
      {cellName: "A8", expectedMoves: ["A7", "B7", "B8"]},
    ])(
      "should return possible moves for given position",
      ({cellName, expectedMoves}) => {
        const board = new Board(new CellNameGenerator());
        const kingMovesCalculator = new KingMovesCalculator();
        const cell = board.getCellByName(cellName)!;

        const possibleMoves = kingMovesCalculator.getPossibleMoves(cell, board);

        expect(possibleMoves.map(cell => cell.getName())).toEqual(expectedMoves);
      },
    );
  });
});
