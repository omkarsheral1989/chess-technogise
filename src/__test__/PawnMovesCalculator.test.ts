import {Board} from "../Board";
import {CellNameGenerator} from "../CellNameGenerator";
import {PawnMovesCalculator} from "../PawnMovesCalculator";
import {ForwardDirection} from "../ForwardDirection";

describe("PawnMovesCalculator class", () => {

  describe("getPossibleMoves()", () => {

    it.each([
      {cellName: "A1", expectedMoves: ["A2"], forwardDirection: ForwardDirection.UP},
      {cellName: "E2", expectedMoves: ["E1"], forwardDirection: ForwardDirection.DOWN},
      {cellName: "H3", expectedMoves: ["H4"], forwardDirection: ForwardDirection.UP},
    ])(
      "should return correct moves for given position",
      ({cellName, expectedMoves, forwardDirection}) => {
        const board = new Board(new CellNameGenerator());
        const pawnMovesCalculator = new PawnMovesCalculator(forwardDirection);
        const cell = board.getCellByName(cellName)!;

        const possibleMoves = pawnMovesCalculator.getPossibleMoves(cell, board);

        expect(possibleMoves.map(cell => cell.getName())).toEqual(expectedMoves);
      },
    );

    it.each([
      {cellName: "A8", forwardDirection: ForwardDirection.UP},
      {cellName: "E8", forwardDirection: ForwardDirection.UP},
      {cellName: "H8", forwardDirection: ForwardDirection.UP},
      {cellName: "A1", forwardDirection: ForwardDirection.DOWN},
      {cellName: "E1", forwardDirection: ForwardDirection.DOWN},
      {cellName: "H1", forwardDirection: ForwardDirection.DOWN},
    ])(
      "should return no moves if pawn is at the last row",
      ({cellName, forwardDirection}) => {
        const board = new Board(new CellNameGenerator());
        const pawnMovesCalculator = new PawnMovesCalculator(forwardDirection);
        const cell = board.getCellByName(cellName)!;

        const possibleMoves = pawnMovesCalculator.getPossibleMoves(cell, board);

        expect(possibleMoves).toEqual([]);
      },
    );
  });
});
