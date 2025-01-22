import {Board} from "../Board";
import {CellNameGenerator} from "../CellNameGenerator";
import {PawnMovesCalculator} from "../PawnMovesCalculator";

describe("PawnMovesCalculator class", () => {

  describe("getPossibleMoves()", () => {

    it.each([
      {cellName: "A1", expectedMoves: ["A2"]},
      {cellName: "E2", expectedMoves: ["E3"]},
      {cellName: "H3", expectedMoves: ["H4"]},
    ])(
      "should return correct moves for given position",
      ({cellName, expectedMoves}) => {
        const board = new Board(new CellNameGenerator());
        const pawnMovesCalculator = new PawnMovesCalculator();
        const cell = board.getCellByName(cellName)!;

        const possibleMoves = pawnMovesCalculator.getPossibleMoves(cell, board);

        expect(possibleMoves.map(cell => cell.getName())).toEqual(expectedMoves);
      },
    );
  });
});
